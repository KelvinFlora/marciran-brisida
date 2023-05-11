<template>
  <nav>
    <NavBar />
  </nav>
  <SchemaOrgDebug />
  <RouterView />
  <FooterSite />
</template>

<script lang="ts">
import { SchemaOrgDebug } from "@vueuse/schema-org";
import { RouterView } from "vue-router";
import FooterSite from "./components/FooterSite.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterSite,
    RouterView,
    SchemaOrgDebug
  }
};
</script>

<script lang="ts" setup>
import { definePerson, defineWebPage, defineWebSite, useSchemaOrg } from "@vueuse/schema-org";
useSchemaOrg([
  definePerson({
    name: "Marciran Brisida",
    image: "/marciran-prof2.png",
    sameAs: [
      "https://www.instagram.com/psi.marciranbrisida",
      "https://www.facebook.com/marciran.brisida"
    ]
  }),
  defineWebSite({
    name: "Marciran Brisida",
    url: "https://marciranbrisida.com"
  }),
  defineWebPage({
    url: "https://marciranbrisida.com",
    name: "Marciran Brisida - here",
    description: "Psicoterapia - Saiba como funciona e como pode ajudar você.",
    keywords: ["psicoterapia", "terapia", "saúde mental"]
  })
  // defineWebPage({
  //   url: "https://marciranbrisida.com/sobre",
  //   name: "Marciran Brisida - Sobre",
  //   description: "Marciran Brisida é Psicólogo Cognitivo Comportamental.",
  //   keywords: ["psicologia cognitivo comportamental", "psicólogo clínico", "profissional da saúde"]
  // }),
  // defineWebPage({
  //   url: "https://marciranbrisida.com/servicos",
  //   name: "Marciran Brisida - Serviços",
  //   description:
  //     "Atendimentos psicológicos para crianças, adultos e idosos. Orientação de pais e Terapia de casal.",
  //   keywords: [
  //     "psicoterapia infantil",
  //     "terapia de casal",
  //     "orientação de pais",
  //     "terapia para adultos",
  //     "terapia para idosos"
  //   ]
  // }),
  // defineWebPage({
  //   url: "https://marciranbrisida.com/contato",
  //   name: "Marciran Brisida - Contato",
  //   description:
  //     "Marciran Brisida realiza atendimentos psicológicos em Três Pontas - MG. Entre em contato através do WhatsApp ou outras redes sociais.",
  //   keywords: [
  //     "psicólogo",
  //     "psicólogo em três pontas",
  //     "psicólogo clínico em três pontas",
  //     "psicologia em três pontas mg",
  //     "contato psicólogo"
  //   ]
  // })
]);
</script>
<style lang="scss"></style>
