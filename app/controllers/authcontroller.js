var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.home = function(req, res) {
  res.render("home");
};

exports.events = function(req, res) {
  res.render("events");
};

exports.map = function(req, res) {
  res.render("map");
};

exports.form = function(req, res) {
  res.render("form");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
