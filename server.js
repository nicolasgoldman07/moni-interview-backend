const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importacion de rutas
var apiPosts = require("./routes/posts");
var apiGets = require("./routes/gets");
var apiDelete = require("./routes/delete");

// Rutas
app.use("/api/post", apiPosts);
app.use("/api/get", apiGets);
app.use("/api/delete", apiDelete);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
