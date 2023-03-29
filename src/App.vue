<template>
    <nav>
    <NavBar />
    </nav>
    <div>
    <FooterSite />
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import FooterSite from './components/FooterSite.vue'

    export default {
        name: 'App',
        components: {
            NavBar, FooterSite}
    }
</script>