from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=['GET','POST',])

def registration():
    if (request.form.get("con_1") != None or request.form.get("con_2") != None) and request.form.get("name") != None:
        return redirect(url_for("main2"))
    #print(request.get_data()) #получаем сырые данные
    print(request.form.get("pos_1")) #получаем имя тега, то что написано
    #print(request.args.get("pos_@")) # олучаем данные на сервер
    print(request.form.get("pos_2"))
    print(request.form.get("name"))
    return render_template("index.html")

@app.route("/reg", methods=['GET','POST',])
def main2():
    if request.form.get("text1") == "8" and request.form.get("text2") == "16" and request.form.get("text3") == "150":
        return redirect(url_for("good"))
    elif(request.form.get("text1") != None and request.form.get("text2") != None and request.form.get("text3") != None):
        return redirect(url_for("lox"))
    return render_template("index2.html")

@app.route("/good")
def good():
    return render_template("index3.html")

@app.route("/lox")
def lox():
    return render_template("index4.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0",port=80)