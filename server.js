const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

//permettre l’accés au backend
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// request type application/json
app.use(express.json());

//request content
app.use(express.urlencoded({extended: true}));

// const db = require("./models");


//set port listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose
    .connect( process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => {
        console.log("Connected to the database!");
        })
        .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// test route
app.get("/", (req, res) => {
    res.json({message: "Welcom to may app"})
});



require("./routes/employes")(app);
app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todos"));
app.use("/notifications", require("./routes/notifications"));


