const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const items = module.exports = mongoose.model('items', itemSchema);