const express = require('express')
const {createRecipeController} = require('../Controller/RecipesController')

const router = express.Router()

router.post('/newrecipe', async (req,res) => createRecipeController(req, res))

module.exports = router