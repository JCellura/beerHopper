var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
    // .get ---------------------------------------------------------
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/home", authController.home);

  app.get("/events", authController.events);

  app.get("/map", authController.map);

  app.get("/form", authController.form);

  app.get("/", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

    // .post --------------------------------------------------------
  app.post("/signup", function(req, res, next) {
    passport.authenticate("local-signup", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/signin");
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/form/" + user.email);
      });
    })(req, res, next);
  });

  app.post("/signin", function(req, res, next) {
    passport.authenticate("local-signin", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/signin");
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/users/" + user.email);
      });
    })(req, res, next);
  });

  app.post("/home", function(req, res, next) {
    (req, res, next);
  });

  app.post("/events", function(req, res, next) {
    (req, res, next);
  });

  app.post("/map", function(req, res, next) {
    (req, res, next);
  });

  app.post("/form", function(req, res, next) {
    (req, res, next);
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};
