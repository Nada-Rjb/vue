<template>
  <div class="my-main">
    <MyComponant />
    <button @click="routerfinc">click me</button>
    <div class="product">
      <ul>
        <li v-maxSize="40" v-for="product in products" :key="product.id">
          <p>Brande: {{ product.brand }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyComponant from "@/components/MyComponant.vue";
import stMixin from "@/mixins/sMixin";
export default {
  components: {
    MyComponant,
  },
  mixins: [stMixin],
  methods: {
    routerfinc() {
      this.$router.replace({ name: "AboutPage" });
    },
  },

  mounted() {
    console.log(this.$router.hasRoute("AboutPage"));
  },
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
