const express = require('express')
const {createRecipeController, getAllRecipeController} = require('../Controller/RecipesController')

const router = express.Router()

router.post('/newrecipe', async (req,res) => createRecipeController(req, res))

router.get('/viewrecipes', async (req,res) => getAllRecipeController(req, res))

module.exports = router