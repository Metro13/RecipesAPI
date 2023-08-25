const express = require('express');
const app = express();

//Configuring API routes
const apiRouter = require('./public/routes/recipe');

//JSON server Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//loading API routes
app.use('/recipe', apiRouter);

app.use('/', (req , res)=>{
  res.send("Welcome to the Food Recipes API");
});

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`API listening on port ${port}`))