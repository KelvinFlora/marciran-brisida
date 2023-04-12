<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white mt-auto">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn text-light btn-floating m-1"
          href="https://www.facebook.com/marciran.brisida"
          target="_blank"
          role="button"
        >
          <i class="bi bi-facebook facebook-button"></i
        ></a>

        <!-- Instagram -->
        <a
          class="btn text-light btn-floating m-1"
          href="https://www.instagram.com/psi.marciranbrisida"
          target="_blank"
          role="button"
          ><i class="bi bi-instagram instagram-button"></i
        ></a>

        <!-- WhatsApp -->
        <a
          class="btn text-light btn-floating m-1"
          href="https://wa.me/+5535988434758"
          target="_blank"
          role="button"
          ><i class="bi bi-whatsapp whatsapp-button"></i
        ></a>

        <!-- Email (precisa colocar link) -->
        <a
          class="btn text-light btn-floating m-1"
          href="marciranbrisidapsi@gmail.com"
          target="_blank"
          role="button"
          ><i class="bi bi-envelope-fill email-button"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Marciran Brisida - Todos os direitos reservados | Desenvolvido por Kelvin Flora
    </div>
    <!-- Copyright -->
  </footer>
</template>
<script>
export default {
  name: "FooterSite"
};
</script>
<style>
.facebook-button:hover {
  color: rgb(253, 210, 16);
}

.instagram-button:hover {
  color: rgb(253, 210, 16);
}

.whatsapp-button:hover {
  color: rgb(253, 210, 16);
}

.email-button:hover {
  color: rgb(253, 210, 16);
}
</style>
