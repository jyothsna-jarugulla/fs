const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/submit", (req, res) => {
  console.log("Form Data Received:");
  console.log(req.body);
  res.send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
