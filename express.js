const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));


app.post("/submit", (req, res) => {
  console.log("form data is received:");
  console.log(req.body);
  res.send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

