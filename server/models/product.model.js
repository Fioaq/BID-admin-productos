const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [3, "Title must be at least 3 characters."],
        maxlength: [50, "Title should not be longer than 50 characters."],
        required: [true, "Title is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        minlength: [10, "Title must be at least 10 characters."],
        maxlength: [200, "Title should not be longer than 200 characters."],
        required: [true, "Title is required"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model("Product", ProductSchema);