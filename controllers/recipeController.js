const Recipe = require('../models/recipe')

module.exports = {

    findAll(req, res) {
        Recipe
            .find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log('error!')
                res.status(500).json({
                    msg: 'internal server error.'
                })
            })
    },

    create(req, res) {
        Recipe
            .create({
                name: req.body.name,
                ingredient: req.body.ingredient,
                howToCook: req.body.howToCook,
                calories: req.body.calories
            })
            .then(newRecipe => {
                res.status(201).json(newRecipe)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error di sini loh'
                })
            })
    }
}