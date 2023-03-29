<template>
    <nav class="navbar bg-dark">
  <div class="container">
    <a class="navbar-brand text-light" href="#">
      <img src="./icons/IconPsychology.png" alt="Logo" width="35" height="29" class="d-inline-block align-text-top">
      Marciran Brisida
    </a>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Início</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Sobre</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Serviços</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contato</a>
  </li>
</ul>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'NavBar',
        }
</script>

<style>
.nav-link {
    color: white;
}
.navbar-nav > .active > a {
  color: rgb(253, 210, 16);
  background-color: rgb(253, 210, 16);    
}
.nav-item > a:hover {
  color: rgb(253, 210, 16);
}
</style>