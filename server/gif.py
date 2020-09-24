"""
Handles GIF making
"""
import shutil
import tempfile
import glob
from PIL import Image
from upload import upload_file
from urllib.request import urlretrieve
import ssl
from flask import Blueprint, request, jsonify

ssl._create_default_https_context = ssl._create_unverified_context

Gif = Blueprint('gif', __name__)


@Gif.route("/api/gif", methods=["POST"])
def make_gif():
  req_data = request.get_json()
  urls = req_data['urls']
  dirpath = tempfile.mkdtemp()

  original_images = []
  for url in urls:
    filename = url.split('/')[-1]
    original_image = dirpath + filename
    original_images.append(original_image)
    urlretrieve(url, original_image)
  gif_result = dirpath + '/gif_result.gif'

  size = (300, 300)
  img = Image.open(original_images[0])
  img = img.resize(size)
  images = []
  for filename in original_images:
    image = Image.open(filename)
    image = image.resize(size)
    images.append(image)
  img.save(fp=gif_result, format="GIF", append_images=images,
           save_all=True, duration=500, loop=0)

  url = upload_file(gif_result)
  shutil.rmtree(dirpath)

  return jsonify({'gifResult': url})
