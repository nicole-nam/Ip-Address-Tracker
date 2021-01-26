const express = require("express");
const https = require("https");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, response) => {
  res.send("Hello World!");
});

var ip = "8.8.8.8";
var api_key = "at_SPsO6PxuGUMOvlwB1YhYNtD6skg4f";
var api_url = "https://geo.ipify.org/api/v1?";

var url = `${api_url}apiKey=${api_key}&ipAddress=${ip}`;

https
  .get(url, function (response) {
    response.on("data", (d)=>{
        const ipData = JSON.parse(d);
        console.log(ipData);
    })
  })


app.listen(3000, () => {
  console.log("server started on port 3000");
});
