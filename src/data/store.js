import { reactive } from "vue";

export const store = reactive({
  getImg(imgName) {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  },
  apiUrl: "https://flynn.boolean.careers/exercises/api/boolgram/",
});
