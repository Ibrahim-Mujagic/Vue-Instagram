<script>
import { store } from "../data/store";
export default {
  name: "StorieComp",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="cont-storie">
    <img :src="store.getImg('profile.jpg')" alt="" />
    <p>Name</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/vars" as *;
@import "../style/mixin";
.cont-storie {
  cursor: pointer;
  border-radius: 50%;
  height: 72px;
  padding: 2px;
  background-image: linear-gradient(to right, #f92163, #fa833c);
  text-align: center;
  img {
    height: 100%;
    @include roundElement;
    border: 1px solid #fff;
  }
  p {
    font-size: 0.7rem;
    font-weight: 100;
  }
}
</style>
