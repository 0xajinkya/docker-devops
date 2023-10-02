const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://ajinkya:ajinkya@172.18.0.2:27017/?authSource=admin")
        .then(() => {
            console.log("Successfully connected to database!")
        })
        .catch((err) => {
            console.log(err)
        });

app.get("/", (req, res) => {
    res.send("Hi, there");
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});