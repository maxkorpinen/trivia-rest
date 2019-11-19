## Trivia REST API

This is a REST API for a Trivia game project, created with a 4-person dev team for the Academy bootcamp by Academic Work.

The API supports GET and POST requests for fetching and storing trivia questions and player scores to a DB.

### Example front end:

An example of a front end solution built with React can be found [here](https://github.com/maxkorpinen/trivia-react).

### Getting started:

1. Run "npm install" on command line

2. Create a "nodemon.json" file and define the database password for your MongoDB collection. Eg.

{
    "env": {
        "MONGO_ATLAS_PW": "zZJ9VcAV4dACFSEq"
    }
}

3. Change the URL of your database collection at app.js

4. Start the server with "nodemon start"