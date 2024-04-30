const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors(
  {
    origin:["https://naruto-api-gamma.vercel.app/"],
    methods:["POST",'GET'],
    credentials:true
  }
))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./routes/User");
app.use("/api",User);

const Session = require("./routes/Session");
app.use("/api",Session);

const Device = require("./routes/Device");
app.use("/api",Device);

const City = require("./routes/City");
app.use("/api",City);

const Event = require("./routes/Event");
app.use("/api",Event);

// Connection from Mongoose to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Admin:admin123@counter.wxua8nf.mongodb.net/test", {
    
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectToDB();

const port = 3003; // Change port to 3003
app.listen(port, () => {
  console.log("Server started");
});
app.get("/" ,(req,res)=>{
  res.status(200).send("Hello from the server!");
})