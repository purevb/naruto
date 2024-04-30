// Define City schema
const mongoose=require("mongoose")
const citySchema = new mongoose.Schema({
    cityId: {
        type: String,
        required: [true, "cityId is required"],
        trim: true,
    },
    cityName: {
        type: String,
        required: [true, "city name is required"],
       
    }
   
});

module.exports = mongoose.model("City", citySchema);

