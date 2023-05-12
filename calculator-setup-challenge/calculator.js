const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
}); // __dirname tells the absolute path of the directory containing the currently executing file.

app.post("/", function(req, res) {
    res.send("Thanks for posting that!");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});