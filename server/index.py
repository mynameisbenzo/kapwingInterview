"""
This is a simple flask server 
that handles requests from the frontend
"""
import os
from flask import Flask, send_from_directory

client_folder = '../client/build/'
app = Flask(__name__, static_folder=client_folder)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
  if path != "" and os.path.exists(client_folder + path):
    return send_from_directory(client_folder, path)
  else:
    return send_from_directory(client_folder, 'index.html')


if __name__ == '__main__':
  app.run(use_reloader=True, port=5000, threaded=True)
