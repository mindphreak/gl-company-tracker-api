const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Company = require("./models/company.model");
const companyRoute = require("./routes/company.route.js");
const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/companies", companyRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://mindphreak:GlassLewis123@cluster0.f1rts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running on port: 3000");
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed!");
  });
