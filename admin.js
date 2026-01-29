const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cars = []; // In-memory database (replace with real DB later)

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.status(200).send({ message: "Logged in" });
    } else {
        res.status(401).send({ message: "Invalid credentials" });
    }
});

app.get("/cars", (req, res) => res.json(cars));

app.post("/cars", (req, res) => {
    const { name, price, category, image } = req.body;
    cars.push({ id: cars.length + 1, name, price, category, image });
    res.status(201).send({ message: "Car added" });
});

app.delete("/cars/:id", (req, res) => {
    const carId = parseInt(req.params.id);
    const index = cars.findIndex((car) => car.id === carId);
    if (index !== -1) {
        cars.splice(index, 1);
        res.send({ message: "Car deleted" });
    } else {
        res.status(404).send({ message: "Car not found" });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
