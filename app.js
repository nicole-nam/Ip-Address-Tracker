const express = require("express");
const https = require("https");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let ip, location, timeZone, isp, lat, lng;
// var mymap = L.map("mapid").setView([51.505, -0.09], 13);

app.get("/", (req, res) => {
  res.render("ip", { newAddress: ip, ispName: isp, time: timeZone });
});

app.post("/", (req, res) => {
  ipAddress = req.body.newInput;

  console.log(ipAddress);
  var api_key = "at_SPsO6PxuGUMOvlwB1YhYNtD6skg4f";
  var api_url = "https://geo.ipify.org/api/v1?";

  var url = `${api_url}apiKey=${api_key}&ipAddress=${ipAddress}`;

  https.get(url, function (response) {
    response.on("data", (d) => {
      const ipData = JSON.parse(d);
      console.log(ipData);

      //Location
      ip = ipData.ip;
      location = ipData.location;
      cityName = location.city;
      region = location.region;
      postalCode = location.postalCode;

      //Time zone
      timeZone = location.timezone;
      console.log(timeZone);

      //ISP
      isp = ipData.isp;
      console.log(isp);

      //latitude + longitude
      lat = location.lat;
      lng = location.lng;
      console.log(lat, lng);
    });
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
