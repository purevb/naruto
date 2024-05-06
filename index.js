const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const Ciity = require("./models/City");
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: "*", // Allow requests from all origins
  methods: ["GET", "POST"], // Allow only GET and POST methods
  credentials: true // Allow sending cookies from the client
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const User = require("./routes/User");
app.use("/api", User);

const Session = require("./routes/Session");
app.use("/api", Session);

const Device = require("./routes/Device");
app.use("/api", Device);

const City = require("./routes/City");
app.use("/api", City);

const Event = require("./routes/Event");
app.use("/api", Event);

const test = require("./routes/test");
app.use("/api", test);

// Connect to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectToDB();

const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Hello from the server!");
});

// City route
app.get("/city", async (req, res) => {
  try {
    const cities = await Ciity.find();
    res.status(200).json({ cities });
  } catch (error) {
    console.error("Error getting cities:", error);
    res.status(500).json({ msg: "Unable to get cities" });
  }
});
