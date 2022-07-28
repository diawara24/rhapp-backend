const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    titre: { type: String, required: true},
    auteur: { type: String, required: true},
    texte: { type: String, required: true}
})

module.exports = Notification = mongoose.model("notification", notificationSchema);