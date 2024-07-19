from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role  = db.Column(db.String(120), unique=True, nullable=False)
    name  = db.Column(db.String(120), unique=True, nullable=False)
    lastname  = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            # do not serialize the password, its a security breach
        }
    
class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url_video = db.Column(db.String(120), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    title = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "category": self.category,
            "title": self.title,
            "description": self.description,
            "author": self.author
        }
    
class Courses(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(120), unique=True, nullable=False)
        description = db.Column(db.String(120), unique=True, nullable=False)
        price = db.Column(db.Enum(120), unique=True, nullable=False)
        
        def serialize(self):
            return {
                "id": self.id,
                "name": self.name,
                "description": self.description,
                "price": self.price
        }

class Orders(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        methods_of_payment = db.Column(db.String(120), unique=True, nullable=False)
        payment_date = db.Column(db.String(120), unique=True, nullable=False)
        total = db.Column(db.Enum(120), unique=True, nullable=False)
        status = db.Column(db.String(120), unique=True, nullable=False)

        def serialize(self):
            return {
                "id": self.id,
                "methods_of_payment ": self.methods_of_payment ,
                "payment_date": self.payment_date,
                "total": self.total,
                "status": self.status,
        }

class Order_Items(db.Model):
            id = db.Column(db.Integer, primary_key=True)
            quantity = db.Column(db.Enum(120), unique=True, nullable=False)
            course_id = db.Column(db.String(120), unique=True, nullable=False)
            order_id = db.Column(db.Enum(120), unique=True, nullable=False)
           

            def serialize(self):
                return {
                    "id": self.id,
                    "quantity ": self.quantity ,
                    "course_id": self.course_id,
                    "order_id ": self.total,
            }


        
             

        