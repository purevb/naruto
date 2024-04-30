const mongoose=require("mongoose");
// Define Event schema
const eventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: [true, "eventId is required"],
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" ,
        required: [true, "User ID is required"],
        trim: true,
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session" 
    },
    deviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Device" ,
        required:[true,"deviceId is required"],
        
        trim:true,
    },
     description:{
        type: String,
        required:[true,"description is required"],
        trim:true,
    }
});

module.exports = mongoose.model("Event", eventSchema);

