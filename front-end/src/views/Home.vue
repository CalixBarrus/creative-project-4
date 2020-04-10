<template>
  <div class="home">

  <h1>Welcome to the Rinaldi Ranch</h1>

  <img :src="'/images/farm.jpeg'">

  <h3>About the ranch</h3>
  <p>The Rinaldi Ranch is a family-owned small business that brings farm-fresh
    goods and experiences close to home. With a warm and friendly tradition of
    stellar customer service, you'll be simply mooing to come back! Get out of city!
    Break your routine! Come visit Rinaldi Ranch!
  </p>

  <p>Located in the rural USA</p>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  }
};
</script>


<style scoped>
h3 {
  margin: 20px;
}
</style>
