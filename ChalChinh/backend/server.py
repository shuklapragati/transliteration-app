from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    users.append(data)
    return jsonify({"message": "Registered", "user": data}), 201

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    for user in users:
        if user.get("email") == data.get("email"):
            return jsonify({"message": "Login success", "user": user})
    return jsonify({"message": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
