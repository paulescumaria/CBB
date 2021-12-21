const {createRecipeServices, getAllRecipeServices, updateRecipeServices, removeRecipeServices} = require('../Services/recipeService')

const createRecipeController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {  
        await createRecipeServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllRecipeController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        await getAllRecipeServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
} 

const updateRecipeController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        await updateRecipeServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const removeRecipeController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        await removeRecipeServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createRecipeController, getAllRecipeController, updateRecipeController, removeRecipeController}