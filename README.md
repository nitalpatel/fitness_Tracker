# Fitness_Tracker

## Description
A fitness app that allows the user to view, create, and track daily workouts. The user is able to log multiple exercises in a given day and also go back and update the workout. The user is able to track the name, type, weight, sets, reps and duration of each exercise. Cardiovascular exercises show the distance traveled in miles.
<br>


## Table of Contents 
* [Live](#Live)
* [Functionality](#Functionality)
* [Acceptance_Criteria](#Acceptance_Criteria)
* [Programming/Scripting_Languages](#Programming/Scripting_Languages)
* [MVC_design_pattern](#MVC_design_pattern)
* [Getting_Started](#Getting_Started)
* [Structure_Of_the_Project](#Structure_Of_the_Project)
* [Screenshots](#Screenshots)
* [Github_Link](#Github_Link)


## Live
https://personal-fitness-tracker.herokuapp.com/

## Functionality
The goal for this assignment is to create a full stack workout tracker web application that will allow a user to keep track of their workout regime by using MongoDB and Mongoose schema for database creation/management and Express for handling routes.

## Acceptance_Criteria
Here are the acceptance criteria that was provided in the intructional ReadMe file for this assignment.

When the user loads the page, they should be given the
option to create a new workout, or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.


## Programming/Scripting_Languages
Node.js - Make sure Node.js is installed in your machine. If Node.js is not installed on your machine,
MongoDB - Install MongoDB to enable your local environment to access the database structure used to store the back-end data for this application.
Robo 3T - Robo 3T is an application that gives users to use an easy graphic user interface (GUI) to view and query data in a MongoDB database. 
Postman - Postman allow users to query the API endpoints developed for this web application. 

Installation Instructions
All NPM packages needed for this application are already listed as dependencies in the package.json file. If running this web application in your local environment, please make sure to run the npm install command in your terminal at the root directory level in order to access all required package.

## MVC_design_pattern
This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

MVC parameters for a fitness workout logger that takes in new exercises and uses MongoDB with Mongoose to log them to the database which can then be analyzed in the app's dashboard that has multiple graphic views of the different workouts. Completion of this app included the buidling out of the exercise model for the Mongo DB formatting to ensure the correct logging of the various fields in the application. As there are two different types of workouts avaialble, resistance and cardio, the requried fields for each of them will be the same while there are a few fields that are only specific to the type of workout being logged.

View object: A view object is an object in the application that is visible (in the user interface) to the end user of the application. The view displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user selects the exercises. The view communicates the user input via the controller to the model.

Controller object: A controller object controls the flow of data between the view and the model (that is, the controller is an intermediary between the two). The controller interprets any user changes made in the view and communicates the changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the updated data in the user interface.

Model object: A model object manages the data. When data is created or changed by the user in the view , that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view, and the view displays the updated data to the user.



## Getting_Started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.
If you don't want to set up this project locally and just want to see the deployed application, go to https://personal-fitness-tracker.herokuapp.com/



To set up this application locally on your computer, perform the following steps:

* [Clone_the_repository](#Clone_the_repository)
* [Install_Node.js](#Install_Node.js)
* [Install_the_dependencies](#Install_the_dependencies)
* [Setting_up_Mongo_Account](#Setting_up_Mongo_Account)
* [Verify_database_connection_information](#Verify_database_connection_information)
* [Start_the_server](#Start_the_server)

1. ### Clone_the_repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
```
  git clone https://github.com/guptaria/Fitness_Tracker.git
  cd Fitness_Tracker
```
## Structure_Of_the_Project
After you clone the repository, navigate to the project root directory . The project directory structure is set up as follows:
* server.js: This file does the following:

   * Defines and requires the dependencies, including express, body-parser, and express-handlebars.
   * Sets up the Express server.
   * Sets up the Express server to handle data parsing using body-parser.
   * Points the server to the API routes, which gives the server a map of how to respond when users visit or request  data from various URLs.
   * Defines the port the server is listening on.
   * Starts the server.
   * Allows the app to serve static content from the public directory.


* public: Contains the static content (images, Javascript, and CSS).

* models: Contains a file called Workout.js, which contains functions used to manage the application data and interact with the database.
  
* views: Contains the Handlebars files, which are templates used to generate the html files.

* package.json: Lists the project dependencies (third party npm packages) and their version numbers.
* .gitignore: Anything listed inside this file will not be tracked by GitHub when code is committed.
* package-lock.json: Dependency tree for the project. Lists all the dependencies and their versions.

2. ### Install_Node.js
If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.

3. ### Install_the_dependencies
The following npm packages are dependencies to the project.

After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required npm packages:
```
npm install
```
* express - a Node.js web application framework (https://www.npmjs.com/package/express).
* body-parser - used to parse incoming request bodies in a middleware. (https://www.npmjs.com/package/body-parser)
* dotenv - used to retrieve the MySQL password from a .env file (https://www.npmjs.com/package/dotenv).
* mysql - used to create a connection to the MySQL database via the command line.(https://www.npmjs.com/package/mysql)
* express-handlebars - allows you to use handlebars to create templates to build the HTML.
(https://www.npmjs.com/package/express-handlebars)
Version information for each of these packages is available in the package.json file in the project root directory.

4. ### Setting_up_Mongo_Account
* Create cluster
* set Database access
* Set Network access
* Copy the link from connect from application and that to the heroku reveal config.

5. ### Verify_database_connection_information
Open the config/connection.js file and verify that the database connection information (host, user, port, password, and database) reflects the database you just created.

Modify the connection properties as needed to reflect your database instance.

For example:
```
 mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
  });
  ```
6. ### Start_the_server
After performing all of the setup steps in the Getting started section, navigate to the project root directory  and run the following command to start the server:
```
node server.js
```

To verify that the server has started and the application is working locally on your computer, open Chrome and go to http://localhost:8080.


## Screenshots

![](public/images/screenShot1.png)
![](public/images/screenShot2.png)



## Github_Link
[**URL of My Github Repository**](https://github.com/guptaria/Fitness_Tracker)<br>

## Portfolio
[**Portfolio**](https://guptaria.github.io/updated_portfolio/)
