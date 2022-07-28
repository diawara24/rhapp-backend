module.exports = app => {
    const employe = require("../controllers/employeController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", employe.create);
    // Retrieve all Tutorials
    router.get("/", employe.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", employe.findOne);
    // Update a Tutorial with id
    router.put("/:id", employe.update);
    // Delete a Tutorial with id
    router.delete("/:id", employe.delete);
    // delete All tutorial
    router.delete("/", employe.deleteAll);

app.use('/api/employe', router);
};