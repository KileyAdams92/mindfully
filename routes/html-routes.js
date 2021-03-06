//dependencies
var path = require("path");

//routes
module.exports = function(app) {
  //home.html route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  //dashboard.html route
  app.get("/dashboard", function(req, res) {
    if (req.user === undefined) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
  });

  //login.html route
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/login.html"));
  });

  //new.html route
  app.get("/new", function(req, res) {
    if (req.user === undefined) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/views/new.html"));
  });
};
