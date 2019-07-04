const router = require("express").Router();
const recipeController = require("../controllers/recipeController");

//get all recipe data
router.get("/", recipeController.findAll);

//add new recipe
router.post("/", recipeController.create);

module.exports = router;