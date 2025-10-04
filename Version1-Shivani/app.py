import os
import sqlite3
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate
import pytesseract
from PIL import Image

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "uploads/"
app.config["DATABASE"] = "database.db"

# Tesseract path (Windows pe zaroori hota hai)
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Available scripts
scripts = {
    "devanagari": sanscript.DEVANAGARI,
    "telugu": sanscript.TELUGU,
    "kannada": sanscript.KANNADA,
    "tamil": sanscript.TAMIL,
    "malayalam": sanscript.MALAYALAM,
    "gujarati": sanscript.GUJARATI,
    "gurmukhi": sanscript.GURMUKHI,
    "bengali": sanscript.BENGALI,
    "oriya": sanscript.ORIYA,
}

# ---------- DATABASE SETUP ----------
def init_db():
    conn = sqlite3.connect(app.config["DATABASE"])
    c = conn.cursor()
    c.execute(
        """CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            input_text TEXT,
            output_text TEXT,
            source_script TEXT,
            target_script TEXT
        )"""
    )
    conn.commit()
    conn.close()

init_db()

# ---------- ROUTES ----------
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        input_text = request.form.get("input_text", "")
        source_script = request.form["source_script"]
        target_script = request.form["target_script"]

        # If image uploaded
        if "image_file" in request.files and request.files["image_file"].filename != "":
            file = request.files["image_file"]
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(filepath)

            # OCR extraction
            img = Image.open(filepath)
            input_text = pytesseract.image_to_string(img, lang="hin+eng")  # Hindi + English

        # Transliteration
        result = transliterate(input_text, scripts[source_script], scripts[target_script])

        # Save to DB
        conn = sqlite3.connect(app.config["DATABASE"])
        c = conn.cursor()
        c.execute(
            "INSERT INTO history (input_text, output_text, source_script, target_script) VALUES (?, ?, ?, ?)",
            (input_text, result, source_script, target_script),
        )
        conn.commit()
        conn.close()

        return render_template(
            "result.html",
            input_text=input_text,
            result=result,
            source_script=source_script,
            target_script=target_script,
        )

    return render_template("index.html", scripts=scripts)


@app.route("/history")
def history():
    conn = sqlite3.connect(app.config["DATABASE"])
    c = conn.cursor()
    c.execute("SELECT * FROM history ORDER BY id DESC")
    data = c.fetchall()
    conn.close()
    return render_template("history.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)
