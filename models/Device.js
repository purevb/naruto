// Define Device schema
const mongoose=require("mongoose")
const deviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: [true, "deviceId is required"],
        minLength: 3,
        maxLength: 100,
        trim: true,
    },
    deviceType: {
        type: String,
        required: [true, "device type is required"],
        minLength: 3,
        maxLength: 100,
        trim: true,
    },
    osVersion: {
        type: String
    },
    appVersion:{
        type:String,
    
    },
    cityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"City",
        required:[true,"cityId is required"],

    },
   
    lattitude:{
        type:String,
       
    },
    longatitude:{
        type:String,
        }
});

module.exports = mongoose.model("Device", deviceSchema);

