<template>
<div class="admin">
  <h1>The Admin Page!</h1>
  <div class="heading">
    <h2>Add an Animal</h2>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="name" placeholder="Name">
      <input v-model="species" placeholder="Species">
      <input v-model="fav_activity" placeholder="Favorite Activity">
      <input v-model="weight" placeholder="Weight">
      <input v-model="height" placeholder="Height">
      <input v-model="fav_food" placeholder="Favorite Food">
      <textarea v-model="catchphrase" placeholder="Catchphrase"/>

      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addAnimal">
      <!-- change this stuff -->
      <h2>{{addAnimal.name}}</h2>
      <p>{{addAnimal.species}}</p>
      <p>{{addAnimal.fav_activity}}</p>
      <p>{{addAnimal.weight}}</p>
      <p>{{addAnimal.height}}</p>
      <p>{{addAnimal.fav_food}}</p>
      <p>{{addAnimal.catchphrase}}</p>
      <img :src="addAnimal.image" />
    </div>
  </div>
  <div class="heading">
     <h2>Edit/Delete an Animal</h2>
   </div>
   <div class="edit">
     <div class="form">
       <input v-model="findName" placeholder="Search">
       <div class="suggestions" v-if="suggestions.length > 0">
         <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectAnimal(s)">{{s.name}}
         </div>
       </div>
     </div>
     <div class="upload" v-if="findAnimal">
       <!-- Put more of profile here -->
      <input v-model="findAnimal.name" placeholder="Name">
      <input v-model="findAnimal.species" placeholder="Species">
      <input v-model="findAnimal.fav_activity" placeholder="Favorite Activity">
      <input v-model="findAnimal.weight" placeholder="Weight">
      <input v-model="findAnimal.height" placeholder="Height">
      <input v-model="findAnimal.fav_food" placeholder="Favorite Food">
      <textarea v-model="findAnimal.catchphrase" placeholder="Catchphrase"/>
       <img :src="findAnimal.image" />
     </div>
     <div class="actions" v-if="findAnimal">
       <button @click="deleteAnimal(findAnimal)">Delete</button>
       <button @click="editAnimal(findAnimal)">Edit</button>
     </div>
   </div>
</div>
</template>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

input,
textarea {
  display: block;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'Admin',
  data() {
    return {
      name: "",
      species: "",
      fav_activity: "",
      weight: "",
      height: "",
      fav_food: "",
      catchphrase: "",
      file: null,
      addAnimal: null,
      animals: [],
      findName: "",
      findAnimal: null,
    }
  },
  computed: {
    suggestions() {
      let animals = this.animals.filter(animal => animal.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return animals.sort((a, b) => a.name > b.name);
    }
  },
  created() {
    this.getAnimals();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData(); // multer thing?
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/animals', {
          name: this.name,
          species: this.species,
          fav_activity: this.fav_activity,
          weight: this.weight,
          height: this.height,
          fav_food: this.fav_food,
          catchphrase: this.catchphrase,
          image: r1.data.path
        });
        this.addAnimal = r2.data;
        this.getAnimals();
      } catch (error) {
        console.log(error);
      }
    },
    async getAnimals() {
      try {
        let response = await axios.get("/api/animals");
        this.animals = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectAnimal(animal) {
      this.findName = "";
      this.findAnimal = animal;
    },
    async deleteAnimal(animal) {
      try {
        await axios.delete("/api/animals/" + animal._id);
        this.findAnimal = null;
        this.getAnimals();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editAnimal(animal) {
      try {
        await axios.put("/api/animals/" + animal._id, {
          name: this.findAnimal.name,
          species: this.findAnimal.species,
          fav_activity: this.findAnimal.fav_activity,
          weight: this.findAnimal.weight,
          height: this.findAnimal.height,
          fav_food: this.findAnimal.fav_food,
          catchphrase: this.findAnimal.catchphrase,
          image: this.findAnimal.image,
        });
        this.findAnimal = null;
        this.getAnimals();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },

}
</script>
