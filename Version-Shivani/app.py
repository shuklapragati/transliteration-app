from flask import Flask, render_template, request
from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate

app = Flask(__name__)

# Map languages to their scripts
languages_scripts = {
    "Hindi": sanscript.DEVANAGARI,
    "Sanskrit": sanscript.DEVANAGARI,
    "Marathi": sanscript.DEVANAGARI,
    "Nepali": sanscript.DEVANAGARI,
    "Punjabi": sanscript.GURMUKHI,
    "Gujarati": sanscript.GUJARATI,
    "Bengali": sanscript.BENGALI,
    "Assamese": sanscript.BENGALI,  # Assamese uses Bengali script
    "Odia": sanscript.ORIYA,
    "Telugu": sanscript.TELUGU,
    "Kannada": sanscript.KANNADA,
    "Tamil": sanscript.TAMIL,
    "Malayalam": sanscript.MALAYALAM,
    "Konkani": sanscript.DEVANAGARI,
    "Sindhi": sanscript.DEVANAGARI,  # Can also use Arabic, but here Devanagari
    "Dogri": sanscript.DEVANAGARI,
    "Maithili": sanscript.DEVANAGARI,
    "Santali": sanscript.DEVANAGARI,  # Uses Ol Chiki, but fallback
    "Manipuri (Meitei)": sanscript.BENGALI,  # Often written in Bengali script
    "Bodo": sanscript.DEVANAGARI,
    "Kashmiri": sanscript.DEVANAGARI,  # Sometimes Perso-Arabic, but fallback
    "Urdu": sanscript.DEVANAGARI  # Perso-Arabic, but fallback
}

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""
    if request.method == "POST":
        input_text = request.form["input_text"]
        source_lang = request.form["source_lang"]
        target_lang = request.form["target_lang"]

        result = transliterate(
            input_text,
            languages_scripts[source_lang],
            languages_scripts[target_lang]
        )

        return render_template("result.html",
                               input_text=input_text,
                               result=result,
                               source_lang=source_lang,
                               target_lang=target_lang)
    return render_template("index.html", languages=languages_scripts)


if __name__ == "__main__":
    app.run(debug=True)
