# import Flask, pymongo, and scrape_mars (your python file)
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, jsonify
from flask import Flask
import os

engine = create_engine("postgresql://postgres:postgres@localhost:5432/ca_homeprice_db")
# engine = create_engine(os.environ.get('DATABASE_URL', ''))

# Instantiate a Flask app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
# app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_app"
# mongo = PyMongo(app)

# Create a base '/' route that will query your mongodb database and render the `index.html` template
@app.route("/")
def welcome():
    return render_template('welcome.html')

# Create a '/scrape' route that will create the mars collection, run your scrape() function from scrape_mars, and update the mars collection in the database
# The route should redirect back to the base route '/' with a code 302.
@app.route("/predictprice")
def predictprice():
    session = Session(bind=engine)
    con = engine.connect()
    ca_homeprice = pd.read_sql("SELECT * FROM ca_homeprice", con)
    
    return jsonify(ca_homeprice)
    # return render_template('predictprice.html')

@app.route("/visuals")
def visuals():
    return render_template('visuals.html')

# @app.route("/team")
# def team():
#     return render_template('team.html')

@app.route("/documentation")
def documentation():
    return render_template('documentation.html')


# Run your app

if __name__ == "__main__":
    app.run()
