const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});
//The request object represents the HTTP request and contains properties for the request query string, parameters, body, HTTP headers, etc.
//The response object specifies the HTTP response when an Express app gets an HTTP request. The response is sent back to the client browser

app.get("/contact", function(req, res) {
    res.send("Contact me at 2021uee1202@mnit.ac.in");
});

app.get("/about", function(req, res) {
    res.send("Myself Shivansu Srivastava");
});
app.get("/hobbies", function(req, res) {
    res.send("Swimming, Reading, Gaming");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});