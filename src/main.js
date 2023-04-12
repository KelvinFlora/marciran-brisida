import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
