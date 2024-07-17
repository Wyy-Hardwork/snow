<template>
  <div>
    <div class="box" @click="getData"></div>
    <div v-masonry="blocks" transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item" v-for="item in blocks" :key="item">
        <!-- block item markup -->
        <img src="@/assets/images/a.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isScrolling: false,
    };
  },
  methods: {
    async getData() {
      console.log("底部");
    },
    handleScroll() {
      if (this.isScrolling) {
        return;
      }

      this.isScrolling = true;

      setTimeout(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;

        if (documentHeight - (scrollTop + windowHeight) <= 0) {
          console.log("触发");
          this.blocks = this.blocks.concat([
            this.blocks.length + 1,
            this.blocks.length + 2,
          ]);
          console.log(this.blocks);
        }

        this.isScrolling = false;
      }, 300);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {},
};
</script>
<style scoped>
.box {
  width: 100%;
  background-color: aquamarine;
}
.item {
  width: 30vw;
  padding: 6px;
  background-color: rgb(136, 129, 129);
  transition-duration: 0.5s;
}
.se-item {
  background-color: red;
}
</style>
