from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

from flask_login import LoginManager






db = SQLAlchemy()

def create_app():
    
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rpojgsgfhigprq:3e74d2ed51b8ad75dadd84b7404ac6761f19396439f75c48c4921cf97e4b2b88@ec2-52-70-107-254.compute-1.amazonaws.com:5432/d1aldo6rvck7l1'
    app.config['SECRET_KEY'] = 'Cameron'

   
   

    ENV ='dev'
    
    if ENV == 'dev':
        app.debug = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rpojgsgfhigprq:3e74d2ed51b8ad75dadd84b7404ac6761f19396439f75c48c4921cf97e4b2b88@ec2-52-70-107-254.compute-1.amazonaws.com:5432/d1aldo6rvck7l1'
        
    else:
        app.debug = False
        app.config['SQLACHEMY_DATABASE_URI'] = 'postgres://rpojgsgfhigprq:3e74d2ed51b8ad75dadd84b7404ac6761f19396439f75c48c4921cf97e4b2b88@ec2-52-70-107-254.compute-1.amazonaws.com:5432/d1aldo6rvck7l1'

    
    db.init_app(app)

    from .views import views
    from .auth import auth
    
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    from .models import User
    
    create_database(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    
    def load_user(id):
        return User.query.get(int(id))
    
    
    
    return app



def create_database(app):
    if not path.exists('website/' + 'sra'):
        db.create_all(app=app)
        print('Created Database!')
