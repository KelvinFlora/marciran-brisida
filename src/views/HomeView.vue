<script setup></script>

<template>
  <main>
    <!-- Initial text -->
    <div class="container pt-4 pb-4">
      <div class="row align-self-xl-center">
        <h1 class="">A Psicoterapia</h1>
        <h2 class="col-xl-6 pt-2 psycho-text">
          Muitas pessoas ainda têm dúvidas sobre a psicoterapia e acham que é algo reservado apenas
          para quem tem "problemas graves".
          <br />
          No entanto, isso não é verdade. A terapia pode ser útil para qualquer pessoa que esteja
          enfrentando dificuldades na vida e que queira melhorar sua saúde mental e bem-estar geral.
          <br />
          É importante lembrar que buscar ajuda não é um sinal de fraqueza, mas sim de coragem e
          resiliência. Todos nós enfrentamos dificuldades em algum momento da vida, e buscar ajuda
          pode ser uma forma de enfrentar esses desafios de forma mais eficaz.
          <br />
          Se você está lutando contra problemas de saúde mental, ou se sabe de alguém que está
          enfrentando esses desafios, considere a possibilidade de buscar ajuda profissional. A
          psicoterapia pode ser uma ferramenta valiosa para ajudá-lo a lidar com esses problemas e
          melhorar sua qualidade de vida.
        </h2>
        <div class="col-xl-6 text-center">
          <img
            class="rounded w-75"
            src="../../public/images/yoga-g336800fd7_1280.jpg"
            alt="Pessoa meditando"
          />
        </div>
      </div>
    </div>
    <!-- Quote -->
    <div class="container-fluid text-center pt-5 pb-5 bg-dark quote-bg">
      <h1 class="home-quote text-light">
        "A mente é como um jardim. Se não for cultivada, pode se tornar uma selva." - Desmond Tutu
      </h1>
    </div>
    <div class="container text-center">
      <img
        class="pt-4 photo-profile"
        alt="Foto de perfil do Psicólogo Marciran"
        src="../../public/images/marciran-photo-prof.png"
      />
    </div>
    <div class="container text-center pt-3">
      <h2>Sobre mim</h2>
    </div>
    <div class="container-fluid text-center pt-4 pb-4">
      <div class="row justify-content-center">
        <h4 class="col-8 align-self-center text-about">
          Meu nome é <strong>Marciran Eleuterio Brisida</strong>, Sou
          <strong>Psicólogo Clínico</strong>. Atendo crianças, adolescentes, adultos e idosos.
          <br />
          Formado em <strong>Psicologia</strong> pela Universidade José do Rosário Vellano -
          UNIFENAS.
          <br />
          Especialista em <strong>Terapia Cognitivo-Comportamental</strong> pela Pontifícia
          Universidade Católica do Paraná - PUCPR.
          <br />
          Psicólogo credenciado junto ao Conselho Federal de Psicologia - CFP para
          <strong>atendimento online</strong> segundo a Resolução CFP Nº: 11/2018.
        </h4>
      </div>
    </div>
    <!--         
    O foco do meu atendimento está voltado para questões relacionadas ao sofrimento emocional no indivíduo. Atendo crianças, adolescentes, adultos e idosos.
    Meu conhecimento e experiência pode auxiliar você a compreender e lidar com suas emoções e pensamentos.
      -->

    <!-- Serviços -->
    <div class="container-fluid pt-4 pb-4 text-center bg-dark text-white">
      <h1 class="pb-3">Serviços</h1>
      <div class="card-group">
        <div class="card bg-dark align-items-center">
          <img src="../../public/images/psychotherapy.jpg" class="card-img-top w-50" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Atendimento Psicológico</h5>
            <p class="card-text">
              Atendimentos Psicológicos voltados para todos os públicos (Infantil, Adolescente,
              Adulto e Idoso).
            </p>
          </div>
        </div>
        <div class="card bg-dark align-items-center">
          <img
            src="../../public/images/parents-orientation.jpeg"
            class="card-img-top w-50"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Orientação de Pais</h5>
            <p class="card-text">
              Orientações aos pais relacionadas a comportamentos e como lidar com situação adversas
              nos diversos ambientes onde seus filhos estão inseridos.
            </p>
          </div>
        </div>
        <div class="card bg-dark align-items-center">
          <img src="../../public/images/couple-therapy.jpg" class="card-img-top w-50" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Terapia de Casal</h5>
            <p class="card-text">
              A terapia de casal possibilitará a identificação e discussão de questões que estão
              afetando o relacionamento, como problemas de comunicação, conflitos, falta de
              intimidade, infidelidade ou outras dificuldades.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.home-quote {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 150%;
}

.photo-profile {
  align-items: center;
  width: 20%;
}
.text-about {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
}
.psycho-text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
}
.h3 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
