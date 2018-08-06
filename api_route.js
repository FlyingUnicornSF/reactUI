const express = require("express");
const app = express();
const apiRoutes = require('./router');
const PORT = process.env.PORT || 3030;
// Add api routes
app.use(apiRoutes);

//if there is no routs are hit, send the index.html in public
app.use(express.static('public'));


app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});