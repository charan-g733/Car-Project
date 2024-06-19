import mongoose from "mongoose";

const carSchema = mongoose.Schema(
    {
    CarName: {
        type: String,
        required: true,
        },
        CarImage: {
            type: String,
            required: true,
        },
   
    MfgYear: {
        type: Number,
        required: true,
        },
        Price: {
            type: Number,
            required: true,
        },  
        FuelType: {
            type: String,
            required: true,
        },
        Transmission: {
            type: String,
            required: true,
        },
        Mileage: {
            type: String,
            required: true,
        },
        Seats: {
            type: Number,
            required: true,
        },
        BodyType: {
            type: String,
            required: true,
        },
       
       
}, 
{
    timestamps: true,
});
export const Car = mongoose.model("car", carSchema);