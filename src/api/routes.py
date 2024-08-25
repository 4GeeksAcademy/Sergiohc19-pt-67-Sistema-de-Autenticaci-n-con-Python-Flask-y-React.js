"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import  request, jsonify, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, get_jwt


api = Blueprint('api', __name__)
CORS(api)

current_user = User.name

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_query = User.query.filter_by(email=email).first()

    print(user_query)
    if email != user_query.email or password != user_query.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/registration', methods=['POST'])
def create_user():
    body = request.json
    print("entro")
    me = User(name=body["name"], lastname=body["lastname"], email=body["email"], password= body["password"] , is_active=True)
    db.session.add(me)
    db.session.commit()
    access_token = create_access_token(identity=me.email)
    response_body = {
        "msg": "Ok",
        "id": me.id,
        "access_token": access_token
    }
    return jsonify(response_body), 200


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200





@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
