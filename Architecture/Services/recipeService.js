const { findById } = require('../Model/recipeData')
const Recipe = require('../Model/recipeData')

const createRecipeServices = async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        time: req.body.time,
        ingredients: req.body.ingredients,
        prepareSteps: req.body.prepareSteps,
        image: req.body.image
    })

    try {
        const saveRespons = await recipe.save()
        res.status(201).json(saveRespons)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
    
}

const getAllRecipeServices = async (req,res) => {
    try {
        const listRecipe = await Recipe.find()
        res.status(200).json(listRecipe)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }

}

const getRecipeById = async (req,res) => {
    var recipeById
    try {
        recipeById = await Recipe.findById(req.body.id) 
        if (recipeById == null) {
            res.status(400).json({ message: "cannot find a recipe by this id"})
        } 
    } catch(err) {}
    res.recipe = recipeById
}

const updateRecipeServices = async (req,res) => {
    try {
    await getRecipeById(req,res)

    if (req.body.title != null) {
        res.recipe.title = req.body.title
    }
    if (req.body.time != null) {
        res.recipe.time = req.body.time
    }
    if (req.body.ingredients != null) {
        res.recipe.ingredients = req.body.ingredients
    }
    if (req.body.prepareSteps != null) {
        res.recipe.prepareSteps= req.body.prepareSteps
    }
    if (req.body.image != null) {
        res.recipe.image = req.body.image
    }

    try {
        const saveUpdates = await res.recipe.save()
        res.status(201).json(saveUpdates)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
    } catch(err) {}
} 

const removeRecipeServices = async (req,res) => {

        try {
            await Recipe.findOneAndDelete(req.body)
            res.status(201).json({message: "The recipe has been deleted"})
        } catch(err) {
            res.status(400).json({ message: err.message })
        }
        
} 

module.exports = {
    createRecipeServices,
    getAllRecipeServices,
    updateRecipeServices,
    getRecipeById,
    removeRecipeServices
}