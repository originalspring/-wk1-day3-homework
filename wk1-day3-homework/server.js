var express = require("express");
var path = require("path");

var app = express();

app.use(express.static('public'))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("home")
});

app.listen(5000);