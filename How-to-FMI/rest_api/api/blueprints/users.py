from flask import Blueprint
from flask_restful_swagger_2 import Api
from bson.json_util import dumps
from flask import Flask, request
from flask_restful import Resource
from config import mongo
import hashlib
import uuid
import datetime
from flask import abort


# Important - api, blueprint
users_bp = Blueprint('users', __name__)
users_api = Api(users_bp, add_api_spec_resource=False, catch_all_404s=True)


class User(Resource):
    def get(self, email):
        return dumps(mongo.db.users.find_one({'email': email}))


class Users(Resource):
    def get(self):
        return dumps(mongo.db.users.find())


class UsersRegistration(Resource):

    def log_user(self, data):
        real_user = mongo.db.users.find_one({'email': data['email']})
        if real_user is None:
            return False

        if hashlib.sha512((data['password'] + real_user['salt']).encode('utf-8')).hexdigest() == real_user['password']:
            return real_user
        else:
            return False

    def register_user(self, data):
        if mongo.db.users.find_one({'email': data['email']}) is not None:
            abort(409, "A user with that username already exists.")
        salt = uuid.uuid4().hex
        hashed_password = hashlib.sha512((data['password'] + salt).encode('utf-8')).hexdigest()
        mongo.db.users.insert({
            'email': data['email'],
            'name': data['name'],
            'salt': salt,
            'password': hashed_password,
            'date_registered': datetime.datetime.now()
        })
        return {'message': 'The user is registered'}

    def post(self):
        data = request.get_json()['data']
        user = self.log_user(data)
        if user:
            return dumps(user)
        else:
            abort(404, "A user with these credentials doesn't exist.")

    def put(self):
        data = request.get_json()['data']
        self.register_user(data)


# Important step:
users_api.add_resource(Users, '/users/all')
users_api.add_resource(User, '/users/<string:email>')
users_api.add_resource(UsersRegistration, '/users/register_service')
