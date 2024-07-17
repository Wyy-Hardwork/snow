<template>
  <div class="home">
    <a-button @click="start">开始</a-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    start() {
      let result = axios.get("novel/top/monthvisit/2.html");
      console.log(result);
    },
  },
  mounted() {},
};
</script>
