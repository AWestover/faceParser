# main app

from os.path import join
import os

from PIL import Image
from io import BytesIO
import base64
from flask import Flask, redirect, render_template, request, session, url_for, jsonify

from recolor import *

# create and configure the app
app = Flask(__name__)

lastPictureString = ""

@app.route('/')
def index(path=""):
    return render_template('index.html', path="")

@app.route('/upload', methods=("POST",))
def upload():
    im_data = request.values['data_uri']
    im_data = im_data.replace('data:image/jpeg;base64,', '')
    im = Image.open(BytesIO(base64.b64decode(im_data)))
    NUMCOLORS = int(request.values['num_colors'])
    res_uri = imgRecolor(im, NUMCOLORS).decode('utf-8')
    res_uri = 'data:image/jpeg;base64,' + res_uri
    return jsonify({"path": res_uri})

@app.route('/fileUpload', methods=("POST",))
def fileUpload():
    print(request.values)
    ff = request.files['pic'].read()
    img = Image.open(BytesIO(ff))
    try:
        if request.values['flip'] == "on":
            img = img.transpose(Image.FLIP_LEFT_RIGHT)
    except:
        pass
    NUMCOLORS = int(request.values['num_colorsFile'])
    img_str = imgRecolor(img, NUMCOLORS).decode("utf-8")
    res_uri = 'data:image/jpeg;base64,' + img_str
    
    global lastPictureString
    lastPictureString = res_uri
    return redirect(url_for("index"))


@app.route('/checkForUpdate', methods=('POST',))
def checkForUpdate():
    global lastPictureString
    tmp = lastPictureString
    lastPictureString = ""
    return jsonify({"path": tmp})

if __name__ == "__main__":
  app.run(debug=True, use_reloader=True)

