module.exports = app => {
    const employe = require("../controllers/employeController.js");
    const auth = require('../middleware/auth');


    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", auth, employe.create);
    // Retrieve all Tutorials
    router.get("/", auth, employe.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", auth, employe.findOne);
    // Update a Tutorial with id
    router.put("/:id", auth, employe.update);
    // Delete a Tutorial with id
    router.delete("/:id", auth, employe.delete);
    // delete All tutorial
    router.delete("/", auth, employe.deleteAll);

app.use('/api/employe', router);
};