To run the flask server, use the following command:

`FLASK_APP=server/index.py FLASK_DEBUG=1 pipenv run python3 -m flask run`

heroku create
git push heroku master
heroku ps:scale web=1
