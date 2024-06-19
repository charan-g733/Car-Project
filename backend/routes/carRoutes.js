import express from "express";
import { Car } from "../models/carModel.js ";
import { User } from "../models/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();
const JWT_SECRET = "mysecret";
//Route for save a new car
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.CarName ||
            !req.body.CarImage ||
            !req.body.MfgYear ||
            !req.body.Price ||
            !req.body.FuelType ||
            !req.body.Transmission ||
            !req.body.Mileage ||
            !req.body.Seats ||
            !req.body.BodyType
        ) {
            return res.status(400).send({ message: "Enter all required fields " });
        }
        const newCar = {
            CarName: req.body.CarName,
            CarImage: req.body.CarImage,
            MfgYear: req.body.MfgYear,
            Price: req.body.Price,
            FuelType: req.body.FuelType,
            Transmission: req.body.Transmission,
            Mileage: req.body.Mileage,
            Seats: req.body.Seats,
            BodyType: req.body.BodyType,
        };

        const car = await Car.create(newCar);
        return res.status(201).send(car);
    }
    catch (error) {
          console.log(error);
       return  res.status(500).send({ message: error.message });
      
    }
});
//Route for get all books
router.get("/", async (req, res) => {
    try {
        const cars = await Car.find({});
        return res.status(200).json({
            count :cars.length,
            data:cars
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});
//Route for get one book from database by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        return res.status(200).json(car);
    }
    catch(error){
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});
//Route for update a book by id
router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.CarName ||
            !req.body.CarImage ||
            !req.body.MfgYear ||
            !req.body.Price ||
            !req.body.FuelType ||
            !req.body.Transmission ||
            !req.body.Mileage ||
            !req.body.Seats ||
            !req.body.BodyType
        ) {
            return res.status(400).send({ message: "Enter all required fields" });
        }
        const {id} = req.params;
        const result = await Car.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
        {
            return res.status(404).json({ message: "Car not found" });
            }
        return res.status(200).json({message:"Car Updated Succesfully"});
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});
//Route for delete a book by id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Car.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Car not found" });
        }
        return res.status(200).json({ message: "Car Deleted Succesfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});
//Route for register a new user
const salt = await bcrypt.genSalt(10);
router.post("/register", async (req, res) => {
    try {
        if (
            !req.body.Name ||
            !req.body.Email ||
            !req.body.Password 
        ) {
            return res.status(400).send({ message: "Enter all required fields" });
        }
        const newUser = {
            Name: req.body.Name,
            Email: req.body.Email,
            Password: await bcrypt.hash(req.body.Password, salt)
        };
        const user = await User.create(newUser);
        return res.status(201).send(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});
//Route for login a user
router.post("/login", async (req, res) => {
    try {
        if (
            !req.body.Email ||
            !req.body.Password
        ) {
            return res.status(400).send({ message: "Enter all required fields" });
        }
        const { Email, Password } = req.body;
        const user = await User.findOne({ Email });
        
       
        if (!user) {
            return res.status(404).send({ message: "User not found" });
            alert("User not found");
        }
        const password = await bcrypt.compare(Password, user.Password);
        if (password === false) {
            return res.status(401).send({ message: "Invalid credentials" });
            alert("Invalid credentials");
        }
        const Token = jwt.sign({name:user.name, id:user._id,email:user.email}, JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", Token, { httpOnly: true });
        return res.status(200).send({ message: "User logged in successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

export default router;