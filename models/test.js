// Define City schema
const mongoose=require("mongoose")
const test = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "cityId is required"],
        trim: true,
    },
    date: {
        type: String,
        required: [true, "city name is required"],
       
    }
   
});

module.exports = mongoose.model("Test", test);

