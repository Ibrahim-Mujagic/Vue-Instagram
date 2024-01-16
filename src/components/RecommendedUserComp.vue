<script>
import { store } from "../data/store";
export default {
  name: "RecommendedUser",
  props: {
    userProfile: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="user-card">
    <div class="image-name">
      <img :src="userProfile.profile_picture" alt="" />
      <h5>{{ userProfile.profile_name }}</h5>
    </div>
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
    cursor: pointer;
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
