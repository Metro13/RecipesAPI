const express = require('express');
const recipeDataset = require('../model/recipes');
const router = express.Router();

//<<<<<<Recipes API Routes>>>>>>>>//
//getting all recipes

router.get('/getAll', async (req, res) =>{
    try {
        const recipes = recipeDataset;
        res.json(recipes);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//getting a single recipe by id
router.get('/:id', getRecipe, (req, res) =>{
    res.send(res.recipe);
});

//recipes middleware
function getRecipe (req, res, next) {
    let recipe;
    try {
        recipe = recipeDataset.filter((recipe) => recipe.name == req.params.id);
        
        if (recipe.length == 0) {
            return res.status(404).json({message: "🥺 Sorry! Couldn't find recipes for that meal.."});
        }
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    res.recipe = recipe;
    next();
}

module.exports = router;