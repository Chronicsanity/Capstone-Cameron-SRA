from flask import Flask
from waitress import serve

def create_app():
    app = Flask(__name__)
 

    if __name__ == '__main__':
        app = create_app()
        serve(app, listen='*:5000')
        app.run(debug=False)
