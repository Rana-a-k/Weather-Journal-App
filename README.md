# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


Firstly, project environment has been set up by installing node and it's packages.

API credentials from OpenWeatherMap website has been aquired, then I used async function to make a GET request to the OpenWeatherMap API using fetch().

I Created an event listener with a callback function to execute when it is clicked.

I made a POST request to add the API data and data entered by the user, to the app using .then.

Using .then again to update the UI dynamically.

Finally, I made some changes in the CSS file.