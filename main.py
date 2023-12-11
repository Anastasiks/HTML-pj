from flask import Flask, render_template

app = Flask(__name__)

@app.route("/login")
def index():
    return render_template("index.html")
@app.route("/registration")
def registr():
    return render_template("index2.html")
@app.route("/about")
def main():
    return render_template("index3.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0",port=80)