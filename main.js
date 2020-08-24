const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const data = require('./data.json');

//Sets the view engine ejs
app.set('view engine', 'ejs');

//JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Sets the folder public to static
app.use(express.static('public'));

//Gets the index file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/views', 'index.html')));

//Returns json data from jsonfile
app.get('/data', (req, res) => res.json(data));

//Render the json data to ejs file and displays the page
app.get('/resturants', (req, res) => res.render(path.join(__dirname, 'public/views', 'resturant'), {data:data}));

//Prints out the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

