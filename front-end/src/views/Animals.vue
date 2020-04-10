<template>

  <div>
      <h1>Meet the farm's animals!</h1>

      <AnimalList :animals="arrayOfAnimals"/>

  </div>


</template>

<script>
import AnimalList from "@/components/AnimalList.vue"
export default {
  name: "Animals",
  components: {
    AnimalList
  },
  computed: {
    arrayOfAnimals() {
      return this.$root.$data.animals;
    }
  },
};
</script>
