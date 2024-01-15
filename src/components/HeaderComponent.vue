<script>
import { store } from "../data/store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img :src="store.getImg('logo.png')" alt="" />
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Cerca" />
    </div>
    <div class="user-nav">
      <ul>
        <li>
          <a href="#"><i class="fa-regular fa-heart"></i></a>
        </li>
        <li>
          <a href="#"> <i class="fa-solid fa-house"></i></a>
        </li>
        <li>
          <a href="#">
            <img :src="store.getImg('profile.jpg')" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/vars" as *;
@import "../style/mixin";

header {
  height: 65px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $secondary-gray;

  .logo {
    height: 100%;
    img {
      height: 100%;
      width: 170px;
      object-fit: cover;
    }
  }

  .search-bar {
    input {
      padding: 7px 15px;
      border-radius: 3px;
      text-align: center;
      border: 1px solid $main-gray;
    }
  }

  .user-nav {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0px 10px;
      li {
        a {
          i {
            font-size: 1.3rem;
            color: $main-gray;
          }
          img {
            height: 45px;
            @include roundElement;
          }
        }
      }
    }
  }
}
</style>
