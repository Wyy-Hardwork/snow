<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>
      <a @click="$router.push('/about')" rel="noopener"
        >点击跳转到需要验证页面</a
      >.
    </h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
