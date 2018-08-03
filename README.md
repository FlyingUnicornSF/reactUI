## this project is based on a code challenge
This project includes:
- react UI
- express
- express.Router
- vanilla JS xmlhttprequest
- jquary (Under contruction)
- axios (Under contruction)

## Express and Node
The original read me noted, "You are not expected to understand or use Express or Node, and you can structure your javascript however you want."

But then I realized I didn't understand express enough so that I can use impliment it in any setup presented to me. I know how to use it in full stack React project. It's premade.  IMy full stack web dev class covered epxress, but nothing about about HTTP.  

How can I fully understand express without knowing anything about HTTP??? 

So I read, and read, and continued this project: built on top of the code challenge to practice and REALLY understand Express and everything else that comes with it while practicing more React. 

## Setup
The code challenge provided a dataset that contains an array of patients, their prescriptions, and the fills for each prescription, as well as a simple API for that dataset. The API server will run locally and serve the bundled JavaScript and CSS after you run the following:

```
$ npm install
$ npm start
```

`npm start` runs `webpack --watch` and `node api.js` for you.

# second setup for express.Router
change  package.json line 5 "main" to `api_routes.js` and change line 8, under "scripts", "start" to `concurrently 'webpack --watch' 'node api_route.js' --kill-others --raw` then `npm start` `node api_router.js` for you.

## API

**The API has the following endpoints at http://localhost:8080**

`GET /users` returns all User objects

`GET /users/:id` returns a single User object

`GET /prescriptions` returns all Prescription objects. If passed `user_id` query param it will return all Prescriptions with that `user_id`

`GET /prescriptions/:id` returns a single Prescription object

`GET /fills` returns all Fill objects. If passed `prescription_id` query param it will return all Fills with that `prescription_id`

`GET /fills/:id` returns a single Fill object

## UI

a basic html page in `public/index.html` that renders at `localhost:8080` was giving and I added UI there. The read me originally note, "You are not expected to understand or use Express or Node, and you can structure your javascript however you want. A single page javascript app is totally fine. We have included react, angular, and backbone, so feel free to use any one of them."


We are looking for you to build a dashboard where we can view these users and their details. Structure your app in the following way:

**Challenge:**

Use the provided API server to do the following:

*  Display a list of full user names as links
*  Each user link should navigate to a detailed view of that user including basic information about that user and a list of their prescriptions by `medication_name` and `rx_number`
*  Clicking on a prescription should display on the same page more details about that prescription as well as a list of that prescription's fills
*  The displayed fills should be chronologically ordered by when they were filled in descending order, and should include other basic information about the fill
*  You should also include a simple navigation to go back to the main users page
*  Update this README with simple instructions on how to run the app when you are finished
* **BONUS** Test your code. This is nice to have, but not expected given the timeframe of the project

Feel free to use any libraries that you want. **You don't have to spend any time on styling**.

**We are looking for the app to be as feature-complete as possible, but be prepared to explain your code and why you made certain decisions. Enjoy!**

