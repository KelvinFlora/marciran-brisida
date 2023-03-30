<template>
    <nav>
    <NavBar />
    </nav>
    <div>
    <FooterSite />
    </div>
    <RouterView />
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