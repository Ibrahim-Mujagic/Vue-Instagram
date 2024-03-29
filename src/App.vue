<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import StorieComponent from "./components/StorieComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import AlternativeUserComp from "./components/AlternativeUserComp.vue";
import RecommendedUserComp from "./components/RecommendedUserComp.vue";
import axios from "axios";
import { store } from "./data/store";
export default {
  name: "App",
  components: {
    HeaderComponent,
    StorieComponent,
    PostComponent,
    AlternativeUserComp,
    RecommendedUserComp,
  },
  data() {
    return {
      store,
      usersProfiles: [],
      newPosts: [],
      postActivities: [],
      isLoaded: false,
    };
  },
  methods: {
    handleWheelScroll(event) {
      this.$refs.scrollContainer.scrollLeft += event.deltaY;
      event.preventDefault();
    },
    getApiData(key, itemToRet) {
      this.isLoaded = false;

      axios
        .get(store.apiUrl + key)
        .then((response) => {
          setTimeout(() => {
            itemToRet.length = 0;
            itemToRet.push(response.data);
            this.isLoaded = true;
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.$refs.scrollContainer.addEventListener(
      "wheel",
      this.handleWheelScroll
    );

    this.getApiData("profiles", this.usersProfiles);
    this.getApiData("posts", this.newPosts);
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
  <main :class="isLoaded ? 'loaded' : 'loading'">
    <div v-if="!isLoaded" class="loader">
      <img :src="store.getImg('spinner.gif')" alt="loader" />
    </div>
    <div class="stories-posts">
      <div
        :class="{ ' stories': true, 'loading-opacity': !isLoaded }"
        ref="scrollContainer"
      >
        <StorieComponent
          v-if="isLoaded"
          v-for="(storie, index) in usersProfiles[0]"
          :key="index"
          :storie="storie"
        />
        <div v-else class="skeleton" v-for="n in 7">
          <div class="icon"></div>
        </div>
      </div>

      <div class="posts">
        <PostComponent
          v-if="isLoaded"
          v-for="(post, index) in newPosts[0]"
          :key="index"
          :postData="post"
        />
        <div v-for="n in 7" v-else class="skeleton">
          <div class="header">
            <div class="circle"></div>
            <div class="text"></div>
          </div>
          <div class="skeleton-body"></div>
        </div>
      </div>
    </div>
    <div class="aside">
      <div class="card-alternative">
        <AlternativeUserComp v-if="isLoaded" />
        <div v-else class="skeleton">
          <div class="circle"></div>
          <div class="cont-text">
            <div class="text"></div>
            <div class="text"></div>
          </div>
          <div class="link"></div>
        </div>
      </div>
      <div class="cont-users">
        <div v-if="isLoaded" class="text-section">
          <p>Suggerimenti per te</p>
          <a href="">Mostra tutti</a>
        </div>
        <div class="recommended-users">
          <RecommendedUserComp
            v-if="isLoaded"
            v-for="(user, index) in usersProfiles[0]"
            :key="index"
            :userProfile="user"
          />
          <div v-else v-for="n in 10" class="skeleton">
            <div class="circle"></div>
            <div class="text"></div>
            <div class="link"></div>
          </div>
        </div>
        <p v-if="isLoaded" class="footer-aside">
          <i class="fa-regular fa-copyright"></i>
          2020 INSTAGRAM FROM FACEBOOK
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "./style/vars" as *;
@import "./style/mixin";
main {
  width: 80%;
  margin: auto;
  display: flex;
  padding-top: 50px;

  :is(.stories, .posts, .cont-users, .card-alternative) {
    .skeleton {
      animation: skeleton-loading 2s infinite alternate;

      .cont-text {
        .text {
          margin-bottom: 10px;
        }
      }
      .text,
      .link {
        height: 14px;
        width: 100px;
        background-color: $secondary-gray;
      }

      .circle {
        height: 60px;
        @include roundElement;
        background-color: $secondary-gray;
      }
    }
    @keyframes skeleton-loading {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .loader {
    position: fixed;
    top: 70px;
    left: 50%;
  }

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
      gap: 0px 14px;
      overflow-x: hidden;
      overflow-y: auto;
      white-space: nowrap;

      &.loading-opacity {
        border: 1px solid gainsboro;
      }

      .skeleton {
        height: 72px;
        @include roundElement;
        background-color: $secondary-gray;
        opacity: 0.5;
      }
    }
    .posts {
      width: 100%;
      .skeleton {
        height: 500px;
        width: 100%;
        border: 1px solid $secondary-gray;
        opacity: 0.5;
        margin-bottom: 20px;

        .header {
          height: 70px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skeleton-body {
          height: calc(100% - 70px);
          width: 100%;
          background-color: $secondary-gray;
        }
      }
    }
  }
  .aside {
    width: 35%;

    .card-alternative {
      .skeleton {
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0.5;
      }
    }

    .cont-users {
      padding: 5px;
      .skeleton {
        height: 85px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 0.5;
      }
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
