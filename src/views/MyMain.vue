<template>
  <div class="my-main">
    <MyComponant />
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
    };
  },
  methods: {
    changeActive(data) {
      this.isActive = data;
    },
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
