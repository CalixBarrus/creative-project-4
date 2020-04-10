const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Middleware here

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/creative-project-4', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/animals/', //need to change when we put on digital ocean
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for animals at the ranch
const animalSchema = new mongoose.Schema({
  species: String,
  name: String,
  "fav-activity": String,
  weight: String,
  height: String,
  "fav-food": String,
  catchphrase: String,
  image: String
});

// Create a model for an animal at the ranch
const Animal = mongoose.model('Animal', animalSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/animals/" + req.file.filename
  });
});

// Create a new animal on the ranch: takes a profile and a path to the image
app.post('/api/animals', async (req, res) => {
  const animal = new Animal({
    species: req.body.species,
    name: req.body.name,
    "fav-activity": req.body["fav-activity"],
    weight: req.body.weight,
    height: req.body.height,
    "fav-food": req.body["fav-food"],
    catchphrase: req.body.catchphrase,
    image: req.body.image
  });
  try {
    await animal.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/animals', async (req, res) => {
  try {
    let animals = await Animal.find();
    res.send(animals);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/animals/:id', async (req, res) => {
  try {
    await Animal.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/animals/:id', async (req, res) => {
  try {
    let animal = await Animal.findOne({
      _id: req.params.id,
    });

    animal.species = req.body.species;
    animal.name = req.body.name;
    animal["fav-activity"] = req.body["fav-activity"]
    animal.weight = req.body.weight
    animal.height = req.body.height
    animal["fav-food"] = req.body["fav-food"]
    animal.catchphrase = req.body.catchphrase
    animal.image = req.body.image

    animal.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// API call definitions here

app.listen(3000, () => console.log('Server listening on port 3000!'));
