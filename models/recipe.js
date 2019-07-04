const mongoose = require('mongoose')
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    name: {
        type: String,
    },
    ingredient: {
        type: String,
    },
    howToCook: {
        type: String,
    },
    calories: {
        type: String,
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe