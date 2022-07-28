const router = require('express').Router();
const auth = require('../middleware/auth');
const Notification = require('../models/notification.model');

router.post("/", async(req,res) => {
    try{
        const { titre } = req.body;

        if(!titre)
            return res.status(400).json({msg: "Not all fields have been entered"});

        const newNotification = new Notification({
            titre,
            auteur: req.auteur,
            texte: req.texte
        });
        const savedNotification = await newNotification.save();
        res.json(savedNotification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get("/all", auth, async(req,res) => {
    const notification = await Notification.find({ titre: req.titre});
    res.json(notification);
})

// router.delete("/:id", auth, async(req,res) => {
//     const todo = await ToDo.findOne({userId: req.user, _id: req.params.id });
//     if(!todo)
//         return res.status(400).json({msg: "No todo item found !!"});
//     const deletedItem = await ToDo.findByIdAndDelete(req.params.id);
//     res.json(deletedItem);
// });
module.exports = router;