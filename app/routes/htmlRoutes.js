var path = require("path");

module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/signin.hbs"));
  });

  // signin route loads signin hbs
  app.get("/signin", function(req, res) {
    res.render(path.join(__dirname, "../views/signin.hbs"));
  });

  app.get("/users/:username", function(req, res) {
    var email = req.params.username;
    console.log(email);
    res.render(path.join(__dirname, "../views/home.hbs"));
  });

    // events route loads events.html
  app.get("/events/:email", function(req, res) {
    console.log(req.user.email);
    res.render(path.join(__dirname, "../views/events.hbs"));
  });

  // app.get("/events/:username/events", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/events.html"));
  // });

    // map route loads map.html
  app.get("/map", function(req, res) {
    res.render(path.join(__dirname, "../views/map.hbs"));
  });

    // form route loads form.html
  app.get("/form/:username", function(req, res) {
    res.render(path.join(__dirname, "../views/form.hbs"));
  });

  // app.get("/signin", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/signin.hbs"));
  // });
};
