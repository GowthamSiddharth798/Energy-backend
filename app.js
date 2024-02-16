const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const sensorDataRoutes = require("./routes/sensordataRoutes");



app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensorDataRoutes);

const port = process.env.PORT || 8000;
mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://gowtham:MkoguuNBZQ3SHDjP@cluster0.yggqton.mongodb.net/?retryWrites=true&w=majority")

  .then((result) => {
    
    console.log("app is running...");
    app.listen(port)
    
  }).catch((err) => {
    console.log(err);
  });




  