import { createHead } from "@vueuse/head";
import { SchemaOrgUnheadPlugin } from "@vueuse/schema-org";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(router);
const head = createHead();
head.use(
  SchemaOrgUnheadPlugin(
    {
      // config
      host: "https://marciranbrisida.com"
    },
    () => {
      const route = router.currentRoute.value;
      return {
        path: route.path,
        ...route.meta
      };
    }
  )
);
app.use(head);

app.mount("#app");
