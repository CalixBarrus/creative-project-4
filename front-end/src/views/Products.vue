<template>

  <div>
      <h1>Products</h1>
      <h3>Browse our variety of farm-fresh products!</h3>

      <ProductList :products="arrayOfproducts"/>

  </div>


</template>

<script>
import ProductList from "@/components/ProductList.vue"
export default {
  name: "products",
  components: {
    ProductList
  },
  computed: {
    arrayOfproducts() {
      return this.$root.$data.products;
    }
  },
};
</script>