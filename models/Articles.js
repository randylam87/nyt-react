// Requires the Mongoose Dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String
    }
})

// Create the Model
const Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;