const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = items = mongoose.model('items', itemSchema);
