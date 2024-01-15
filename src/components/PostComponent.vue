<script>
import { store } from "../data/store";
export default {
  name: "PostComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="post">
    <div class="post-header">
      <a href="#" class="image-name">
        <img :src="store.getImg('profile.jpg')" alt="" />
        <h4>Name</h4>
      </a>
      <div class="dots">
        <a href="#">
          <i class="fa-solid fa-ellipsis"></i>
        </a>
      </div>
    </div>
    <div class="picture">
      <img :src="store.getImg('landscape.png')" alt="" />
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
      <div class="like-counter">
        <p>Piace a <strong>35 persone</strong> e <strong>altri 4</strong></p>
      </div>
      <div class="users-comments-section">
        <p class="show-more-comments">Mostra tutti i 4 commenti</p>
        <div class="card-comment">
          <h5 class="name-user">Mario Rossi</h5>
          <p>Lorem ipsum dolor</p>
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

  .users-comments-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .show-more-comments {
      color: $secondary-gray;
      font-size: 0.9rem;
    }
    .card-comment {
      min-height: 35px;
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
</style>
