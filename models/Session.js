const mongoose = require("mongoose");

// Define Session schema
const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: [true, "sessionId is required"],
        minLength: 3,
        maxLength: 100,
        trim: true,
    },
    userId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
    },
});


module.exports=mongoose.model("Session", sessionSchema);
