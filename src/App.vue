<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import StorieComponent from "./components/StorieComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import AlternativeUserComp from "./components/AlternativeUserComp.vue";
import RecommendedUserComp from "./components/RecommendedUserComp.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    StorieComponent,
    PostComponent,
    AlternativeUserComp,
    RecommendedUserComp,
  },
  methods: {
    handleWheelScroll(event) {
      this.$refs.scrollContainer.scrollLeft += event.deltaY;
      event.preventDefault();
    },
  },
  mounted() {
    this.$refs.scrollContainer.addEventListener(
      "wheel",
      this.handleWheelScroll
    );
  },
  destroyed() {
    this.$refs.scrollContainer.removeEventListener(
      "wheel",
      this.handleWheelScroll
    );
  },
};
</script>

<template>
  <HeaderComponent />
  <main>
    <div class="stories-posts">
      <div class="stories" ref="scrollContainer">
        <StorieComponent v-for="n in 7" />
      </div>
      <div class="posts">
        <PostComponent v-for="n in 5" />
      </div>
    </div>
    <div class="aside">
      <div class="card-alternative">
        <AlternativeUserComp />
      </div>
      <div class="cont-users">
        <div class="text-section">
          <p>Suggerimenti per te</p>
          <a href="">Mostra tutti</a>
        </div>
        <div class="recommended-users">
          <RecommendedUserComp v-for="n in 10" />
        </div>
        <p class="footer-aside">
          <i class="fa-regular fa-copyright"></i>
          2020 INSTAGRAM FROM FACEBOOK
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "./style/vars" as *;
main {
  width: 80%;
  margin: auto;
  display: flex;
  padding-top: 50px;

  .stories-posts {
    width: 65%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .stories {
      width: 100%;
      height: 170px;
      margin-bottom: 40px;
      padding: 0px 10px;
      border: 1px solid $secondary-gray;
      border-radius: 3px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0px 7px;
      overflow-x: hidden;
      overflow-y: auto;
      white-space: nowrap;
    }
    .posts {
      width: 100%;
    }
  }
  .aside {
    width: 35%;

    .cont-users {
      padding: 5px;
      .text-section {
        display: flex;
        justify-content: space-between;
        p {
          color: $secondary-gray;
        }
        a {
          text-decoration: none;
          color: $main-gray;
          font-weight: bolder;
        }
      }
    }
    .footer-aside {
      color: $secondary-gray;
      font-size: 0.8rem;
      margin-top: 20px;
    }
  }
}
</style>
