<template>
  <div class="my-main">
    <MyComponant />
    <div class="product">
      <ul>
        <li v-for="product in products" :key="product.id">
          <p> Brande: {{ product.brand}} </p>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyComponant from "@/components/MyComponant.vue";

export default {
  components: {
    MyComponant,
  },
  data() {
    return {
      students: ["nadoda", "mohamed", "menna"],
      isActive: true,
      products:[]
    };
  },
  methods: {
    changeActive(data) {
      this.isActive = data;
    },
   async GetProducyt(){
    await fetch ('https://dummyjson.com/products')
    .then(res => res.json())
    .then ((data) => this.products = data.products)

    }
  },
  async mounted(){
    await this.GetProducyt();
  }
};
</script>

<style scoped lang="scss">
.my-main {
  h1 {
    color: red;
  }
  p {
    color: green;
  }
}
</style>
