<template>
    <nav>
    <NavBar />
    </nav>
    <RouterView />
    <div>
    <FooterSite />
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import FooterSite from './components/FooterSite.vue'
    import { RouterView } from "vue-router";

    export default {
        name: 'App',
        components: {
            NavBar, FooterSite, RouterView}
    }
</script>