const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // Allows acess to req.body

// Routes (RESTful API)

// Create a recipe
app.post('/recipe/new-recipe', async (req, res) => {
  try {
    const { title, description, method, ingredients } = req.body;
    const newRecipe = await pool.query(
      'INSERT INTO recipe (title, description, method, ingredients) VALUES  ($1, $2, $3, $4) RETURNING *',
      [title, description, method, ingredients]
    );

    res.json(newRecipe.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all recipes
app.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await pool.query('SELECT * FROM recipe');
    res.json(allRecipes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a recipe
app.get('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await pool.query(
      'SELECT * FROM recipe WHERE recipe_id = $1',
      [id]
    );
    res.json(recipe.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a recipe
app.put('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, method, ingredients } = req.body;
    const updateRecipe = await pool.query(
      'UPDATE recipe SET title = $1, description = $2, method = $3, ingredients = $4 WHERE recipe_id = $5',
      [title, description, method, ingredients, id]
    );
    res.json('Recipe was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a recipe
app.delete('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRecipe = await pool.query(
      'DELETE FROM recipe WHERE recipe_id = $1',
      [id]
    );
    res.json('This recipe has been deleted');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5001, () => {
  console.log('Listening on port 5001');
});
