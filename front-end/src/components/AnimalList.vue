<template>
  <div>
  <div class="wrapper">
    <div class="animals">
      <div class="animal" v-for="animal in animals" :key="animal.id">
        <div class="animal-header">
          <h2>{{animal.name}}</h2>
          <p>{{animal.species}}</p>
        </div>
        <div class="image">
          <img :src="animal.image">
        </div>
        <div class="animal-profile">
          <p>Weight: {{animal.weight}}</p>
          <p>Height: {{animal.height}}</p>
          <p>Favorite Activity: {{animal["fav_activity"]}}</p>
          <p>Favorite Food: {{animal["fav_food"]}}</p>
          <p>Catchphrase: {{animal.catchphrase}}</p>
          <!-- <button class="favorite-button" @click="toggleFavorite(animal)" ><i :class={ far: animal.isFavorite, fas: !animal.isFavorite, 'fa-heart': true }></i></button> -->
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "AnimalList",
  props: {
    animals: Array,
  },
  methods: {
    // toggleFavorite(animal) {
      // Do stuff
  //  }
  }
  // computed: {
    // iconClass: () => {
    //   return {
    //     far: this.$root.$data.favorites.find(animal.name), // Regular
    //     fas: !this.$root.$data.favorites.find(animal.name), // Solid
    //     'fa-heart': true
    //   }
    // }
  // },
};
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.animals {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.animal {
  margin: 10px;
  margin-top: 50px;
  max-width: 450px;
}

.image img {
  max-height: 300px;
}

</style>
