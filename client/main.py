from flask import Flask
from waitress import serve

def create_app():
    app = Flask(__name__)
 

    if __name__ == '__main__':
        serve(app, listen='*:5000')
        app = create_app()
        app.run(debug=False)
    return 'OK'