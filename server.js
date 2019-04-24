// Pull in required dependencies
var Bandwidth = require("node-bandwidth");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require("passport");
var session = require("express-session");
var env = require("dotenv").load();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3007;

// Configure the Express application
var app = express();

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

app.set("views", "./app/views");
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

//Models
var db = require("./app/models");

// Add the application routes
require("./app/routes/apiRoutes.js")(app, db.beer, db.user);
require("./app/routes/htmlRoutes.js")(app);

app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Routes
var authRoute = require("./app/routes/auth.js")(app, passport);

//load passport strategies
require("./app/config/passport/passport.js")(passport, db.user);

//Sync Database
db.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

app.listen(PORT, function(err) {
  if (!err) console.log("Site is live");
  else console.log(err);
});
