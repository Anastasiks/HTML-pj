from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=['GET','POST',])
def main():
    if request.method == 'GET':
        return render_template("index.html")
    if request.method == 'POST':
        if (request.form.get("login") == "admin") and (request.form.get("parol") == "admin"):
            return render_template("index3.html")
        else:
            return render_template("index2.html")


@app.route("/admin")
def admin():
    return render_template("index2.html")

@app.route("/pol")
def pol():
    return render_template("index3.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0",port=80)