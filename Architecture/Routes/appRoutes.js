const express = require('express')
const { createUserController, loginController } = require('../Controller/userController')
const {createRecipeController, getAllRecipeController, updateRecipeController, removeRecipeController} = require('../Controller/recipesController')
const { getRecipeById } = require('../Services/recipeService')

const router = express.Router()

router.post('/newrecipe', async (req,res) => createRecipeController(req, res))

router.get('/viewrecipes', async (req,res) => getAllRecipeController(req, res))

router.put('/modifyrecipe', async (req,res) => updateRecipeController(req, res))

router.delete('/removerecipe', async (req,res) => removeRecipeController(req,res))

router.post('/createuser', async (req,res) => createUserController(req,res))

router.get('/login', async (req,res) => loginController(req,res))

module.exports = router