<template>

  <div>
      <h1>Meet the farm's animals!</h1>

      <AnimalList :animals="arrayOfAnimals"/>

  </div>


</template>

<script>
import AnimalList from "@/components/AnimalList.vue"
import axios from "axios";

export default {
  name: "Animals",
  components: {
    AnimalList
  },
  data() {
    return {
      arrayOfAnimals: [],
    }
  },
  created() {
    this.getAnimals();
  },
  methods: {
    async getAnimals() {
      try {
        let response = await axios.get("/api/animals");
        this.arrayOfAnimals = response.data;
        return true;
      } catch (error) {
        console.log(error);
        return [];
      }
    },

  },


};
</script>
