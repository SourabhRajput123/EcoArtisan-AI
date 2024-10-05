# app/__init__.py
from flask import Flask
from .routes import main  # Ensure this line is correct

def create_app():
    app = Flask(__name__)
    
    # Register the blueprint
    app.register_blueprint(main)

    return app
