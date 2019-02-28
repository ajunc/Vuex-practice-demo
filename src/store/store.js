import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马化腾", price: 145 },
            { name: "马已", price: 100 }
          ]
    }
})