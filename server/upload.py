"""
Handles signing uploads correctly
"""
from flask import Blueprint, request, jsonify
import boto3
import mimetypes

Upload = Blueprint('upload', __name__)


# this really shouldn't be commited to github,
# but hopefully you won't abuse this!
# these credentials give read/write access to the kapwing-uploads bucket on s3
# AWS_KEY = 'AKIAJOQ6PZTDFTFUXC6Q'
# AWS_SECRET = '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'

AWS_KEY = 'AKIAJFK2M47U5NJMIGOA'
AWS_SECRET = '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'

session = boto3.Session(aws_access_key_id=AWS_KEY,
                        aws_secret_access_key=AWS_SECRET)
s3 = session.client('s3')


@Upload.route("/upload/sign")
def sign_upload():
  object_name = request.args['objectName']
  content_type = mimetypes.guess_type(object_name)[0]

  # create signed url
  signed_url = s3.generate_presigned_url(
      'put_object', {'Bucket': 'kapwing-uploads',
                     'Key': object_name, 'ContentType': content_type, 'ACL': 'public-read'}, ExpiresIn=3600, HttpMethod='PUT')

  # create signed url
  # signed_url = s3.generate_presigned_post(
  #     Bucket='kapwing-uploads', Key=object_name)

  print(signed_url)
  return jsonify({'signedUrl': signed_url})
