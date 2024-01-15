<script>
import { store } from "../data/store";
export default {
  name: "RecommendedUser",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="user-card">
    <a class="image-name">
      <img :src="store.getImg('profile.jpg')" alt="" />
      <h5>Name</h5>
    </a>
    <button>Segui</button>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/vars" as *;
@import "../style/mixin";
.user-card {
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  .image-name {
    display: flex;
    align-items: center;
    img {
      height: 60px;
      @include roundElement;
      margin-right: 10px;
    }
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: $main-blue;
    font-weight: bold;
    font-size: 0.9rem;
  }
}
</style>
