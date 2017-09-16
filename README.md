## Setup
We have included a dataset that contains an array of patients, their prescriptions, and the fills for each prescription, as well as a simple API for that dataset. The API server will run locally and serve the bundled JavaScript and CSS after you run the following:

```sh
$ npm install
$ webpack --watch
```

And run in a different pane:
```sh
$ node api.js
```

## API

**The API has the following endpoints at localhost:8080:**

`GET /users` returns all User objects

`GET /users/:id` returns a single User object

`GET /prescriptions` returns all Prescription objects. If passed `user_id` query param it will return all Prescriptions with that `user_id`

`GET /prescriptions/:id` returns a single Prescription object

`GET /fills` returns all Fill objects. If passed `prescription_id` query param it will return all Fills with that `prescription_id`

`GET /fills/:id` returns a single Fill object

## UI

We set up a basic html page in `public/index.html` that renders at `localhost:8080`, please add your UI there. You are not expected to understand or use Express or Node, and you can structure your javascript however you want. A single page javascript app is totally fine. We have included react, angular, and backbone, so feel free to use any one of them.

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

Feel free to use any libraries that you want. You don't have to spend any time on design.

**We are looking for the app to be as feature-complete as possible, but be prepared to explain your code and why you made certain decisions. Enjoy!**

