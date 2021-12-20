const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: Int32,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    prepareSteps: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)