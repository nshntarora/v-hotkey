import { createApp } from "@vue/runtime-dom";
import VueHotkey from "../../src/index.js";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import routes from "./routes";

import "bulma/css/bulma.css";

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

const app = createApp(App);

app.use(router).use(VueHotkey).mount("#app")


// /* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   render(h) {
//     return h(App);
//   }
// });
