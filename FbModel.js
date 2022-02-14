const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    review: String,
    rating: Number,
});

module.exports =   mongoose.model("feedback", FeedbackSchema);