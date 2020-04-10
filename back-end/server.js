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
    res.send(animal);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
// app.get('/api/items', async (req, res) => {
//   try {
//     let items = await Item.find();
//     res.send(items);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.delete('/api/items/:id', async (req, res) => {
//   try {
//     await Item.deleteOne({
//       _id: req.params.id
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.put('/api/items/:id', async (req, res) => {
//   try {
//     let item = await Item.findOne({
//       _id: req.params.id,
//     });
//     item.title = req.body.title
//     item.description = req.body.description
//     item.save()
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// API call definitions here

app.listen(3000, () => console.log('Server listening on port 3000!'));