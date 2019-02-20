"""
This is a simple flask server
that handles requests from the frontend
"""
import os
from flask import Flask, send_from_directory
from upload import Upload

CURRENT_DIR = os.path.dirname(__file__)
client_folder = CURRENT_DIR + '/../client/build/'
app = Flask(__name__, static_folder=client_folder)

# account for imported request handlers
app.register_blueprint(Upload)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
  print()
  print('serving path:', path)
  print('client_folder:', client_folder)
  print()
  if path != "" and os.path.exists(client_folder + path):
    return send_from_directory(client_folder, path)
  else:
    return send_from_directory(client_folder, 'index.html')

# @app.route('/')
# def homepage():
#   return """
#     <h1>Hello heroku</h1> """


if __name__ == '__main__':
  app.run(use_reloader=True, port=5000, threaded=True)
