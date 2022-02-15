from website import create_app
from waitress import serve

app = create_app()

def activate_app():
    if __name__ == '__main__':
        serve(app, listen='*:5000')
        app.run(debug=False)
