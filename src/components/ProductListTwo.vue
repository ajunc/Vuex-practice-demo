<template>
  <div id="product-list-two">
    <h2>Product List two</h2>
    <ul>
        <li v-for="(product,index) in products" :key="index">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
      products() {
          return this.$store.state.products;
      }
  }
}
</script>

<style>

</style>
