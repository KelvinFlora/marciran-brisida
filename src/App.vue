<template>
  <nav>
    <NavBar />
  </nav>
  <RouterView />
  <FooterSite />
</template>

<script>
import { RouterView } from "vue-router";
import FooterSite from "./components/FooterSite.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSite,
    RouterView
  }
};
</script>

<script lang="ts" setup>
import { definePerson, defineWebPage, defineWebSite, useSchemaOrg } from "@vueuse/schema-org";
useSchemaOrg([
  definePerson({
    name: "Marciran Brisida",
    image: "/marciran-prof2.png",
    sameAs: ["https://www.instagram.com/psi.marciranbrisida"], ["https://www.facebook.com/marciran.brisida"]
  }),
  defineWebSite({
    url: "https://marciranbrisida.com"
  }),
  defineWebPage()
]);
</script>
<style lang="scss"></style>
