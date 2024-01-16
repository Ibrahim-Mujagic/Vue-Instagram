<script>
import { store } from "../data/store";
export default {
  name: "PostComponent",
  props: {
    postData: Object,
  },
  data() {
    return {
      store,
      userLikes: [],
      randomLike: "",
      likesNum: 0,
      limitComments: 3,
      isShowAllComments: false,
      isShowModal: false,
    };
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomUserLike() {
      if (
        Array.isArray(this.postData.likes) &&
        this.postData.likes.length > 0
      ) {
        this.userLikes = this.postData.likes;
        let randomIndex = this.getRandomNumber(0, this.userLikes.length - 1);
        this.randomLike = this.userLikes[randomIndex].username;
        this.likesNum = this.userLikes.length;
      } else {
        this.randomLike = "";
        this.likesNum = 0;
      }
    },
    showAllComments() {
      this.isShowAllComments = !this.isShowAllComments;

      if (this.isShowAllComments) {
        this.limitComments = this.postData.comments.length;
      } else {
        this.limitComments = 3;
      }
    },
  },
  mounted() {
    this.getRandomUserLike();
  },
};
</script>

<template>
  <div class="post">
    <div class="post-header">
      <a href="#" class="image-name">
        <img :src="postData.profile_picture" :alt="postData.profile_name" />
        <h4>{{ postData.profile_fullname }}</h4>
      </a>
      <div class="dots">
        <a href="#">
          <i class="fa-solid fa-ellipsis"></i>
        </a>
      </div>
    </div>
    <div class="picture">
      <img
        @click="isShowModal = true"
        :src="postData.post_image"
        :alt="postData.post_text"
      />
    </div>
    <div class="like-comments">
      <div class="buttons-post">
        <button>
          <i class="fa-regular fa-heart"></i>
        </button>
        <button>
          <i class="fa-regular fa-comment"></i>
        </button>
      </div>
      <h4 class="post-text">{{ postData.post_text }}</h4>
      <div class="like-counter">
        <p>
          <span v-if="randomLike !== ''"
            >Piace a
            <strong v-html="randomLike"></strong>
          </span>
          <span v-if="likesNum > 0">
            e ad altre <strong>{{ likesNum }}</strong> persone
          </span>
        </p>
      </div>
      <div class="users-comments-section">
        <p
          @click="showAllComments()"
          v-if="postData.comments.length > 3"
          class="show-more-comments"
        >
          {{
            postData.comments.length > 0
              ? "Mostra tutti i" +
                " " +
                postData.comments.length +
                " " +
                "commenti"
              : ""
          }}
        </p>

        <div
          v-for="(comment, index) in postData.comments.slice(0, limitComments)"
          :key="index"
          class="card-comment"
        >
          <h5 class="name-user">{{ comment.username }}</h5>
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <div class="last-comment">
        <p>33 ore fa</p>
      </div>
    </div>
    <div class="comment-area">
      <textarea placeholder="Aggiungi un coommento"></textarea>
      <button>Pubblica</button>
    </div>
  </div>
  <div @click="isShowModal = false" v-if="isShowModal" class="modal">
    <img :src="postData.post_image" :alt="postData.post_text" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/vars" as *;
@import "../style/mixin";
.post {
  min-width: 100%;
  border: 1px solid $secondary-gray;
  margin-bottom: 50px;
  border-radius: 3px;
  .post-header {
    height: 75px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image-name {
      text-decoration: none;
      display: flex;
      align-items: center;
      img {
        height: 50px;
        @include roundElement;
        margin-right: 10px;
      }
    }
    a {
      color: $main-gray;
    }
  }

  .picture {
    height: 350px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .like-comments {
    padding: 0px 10px;
    .buttons-post {
      button {
        cursor: pointer;
        height: 30px;
        aspect-ratio: 1/1;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        margin: 10px;
        color: $main-gray;
      }
    }
  }

  .post-text {
    margin: 10px 0px;
  }

  .users-comments-section {
    display: flex;
    flex-direction: column;
    .show-more-comments {
      color: $secondary-gray;
      font-size: 0.9rem;
      cursor: pointer;
    }
    .card-comment {
      min-height: 30px;
      display: flex;
      align-items: center;
      gap: 0px 10px;
      p {
        font-size: 0.9rem;
      }
    }
  }

  .last-comment {
    margin: 5px 0px;
    p {
      color: $secondary-gray;
      font-size: 0.9rem;
    }
  }

  .comment-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $secondary-gray;
    padding: 5px 4px;
    textarea {
      resize: none;
      width: calc(100% - 90px);
      height: 35px;
      padding: 0px 10px;
      border: none;
      line-height: 35px;

      &:focus {
        outline: none;
      }
    }
    button {
      width: 80px;
      color: $main-blue;
      background-color: transparent;
      border: none;
      font-weight: bold;
      cursor: pointer;
      padding: 5px 0px;
      &:hover {
        border: 1px solid $main-blue;
      }
    }
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(220, 220, 220, 0.783);
  img {
    border-radius: 10px;
  }
}
</style>
