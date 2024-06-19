import express from 'express';
import { PORT,MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import carRoutes from "./routes/carRoutes.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome To Car Rental");
    return res.status(200).send({ message: "Welcome to Car Rental" });
});
//CORS Middleware
app.use(cors());
//Middleware for parsing request body
app.use(express.json());
  
app.use("/cars", carRoutes);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
     })
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        
})
    .catch((error) => {
        console.log("Error connecting to MongoDB: ", error.message);
    });