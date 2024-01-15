<script>
import { store } from "../data/store";
export default {
  name: "AlternativeUser",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="user-card">
    <div class="image">
      <img :src="store.getImg('profile.jpg')" alt="" />
    </div>
    <div class="user-text">
      <h4>User Name</h4>
      <p>User Real Name</p>
    </div>
    <div class="btn">
      <button>Passa A</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/vars" as *;
@import "../style/mixin";
.user-card {
  height: 80px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  .image {
    img {
      height: 50px;
      @include roundElement;
    }
  }
  .user-text {
    h4 {
      color: $main-gray;
    }
    p {
      color: $secondary-gray;
    }
  }
  .btn {
    button {
      color: $main-blue;
      background-color: transparent;
      border: none;
      font-weight: bold;
      font-size: 0.9;
      cursor: pointer;
    }
  }
}
</style>
