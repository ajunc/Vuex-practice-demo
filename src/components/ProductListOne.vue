<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="(product,index) in saleProducts" :key="index">
            <span class="name">{{product.name}}</span>
            <span class="price">{{product.price}}</span>
        </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapActions} from "vuex";
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        //saleProducts() {
            //return this.$store.getters.saleProducts;
        //}
        ...mapGetters([
            "saleProducts"
        ])
    },
    methods:{
        // reducePrice(amout){
        //     //this.$store.commit('reducePrice');

        //     this.$store.dispatch("reducePrice",amout);
        // }

        ...mapActions([
            "reducePrice"
        ])
    }
}
</script>

<style>

</style>
