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
    <!-- About Me -->
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
    <!-- Contact -->
    <div
      class="container"
      style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    >
      <h1 class="text-center pt-4">Contato</h1>
    </div>
    <div class="container pt-3">
      <h2>Informações de Contato</h2>
      <p>Nome: Marciran Eleutério Brisida</p>
      <p>
        Telefone: (35) 98843-4758
        <a href="https://wa.me/+5535988434758" target="_blank" class="a-wpp"
          ><i class="bi bi-whatsapp ps-2"></i
        ></a>
      </p>
      <p>
        Endereço: Edifício Manhattan - Rua Francisco Garcia de Miranda Junior, Nº 130, Sala 203,
        Centro, Três Pontas - MG
      </p>
      <p>Email: marciranbrisidapsi@gmail.com</p>
    </div>
    <div class="container py-0 mt-4 contact-overlay">
      <div class="row">
        <div class="col-12 col-lg-6 mb-4">
          <form @submit="submitForm($event)">
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <label for="formGroupExampleInput" class="form-label">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Digite seu nome"
                  v-model="name"
                  :disabled="sendingForm"
                />
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <label for="phone" class="form-label">Telefone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  name="phone"
                  placeholder="(xx) xxxxx-xxxx"
                  v-model="phone"
                  @keypress="phoneMask($event)"
                  :disabled="sendingForm"
                />
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  v-model="email"
                  :disabled="sendingForm"
                />
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Digite sua mensagem:
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  v-model="msg"
                  :disabled="sendingForm"
                ></textarea>
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              <div class="col-12">
                <p v-if="formError" class="text-danger">{{ formError }}</p>
                <p v-if="formSent" class="text-success">
                  Recebemos a sua mensagem. Responderemos em breve! 😉
                </p>
                <button
                  type="submit"
                  class="btn btn-primary submit-button mt-2 btn-lg w-50"
                  :disabled="sendingForm"
                >
                  <span
                    v-if="sendingForm"
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>

                  <span v-if="sendingForm">Enviando...</span>
                  <span v-if="!sendingForm">Enviar</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 mb-4 badge text-wrap justify-content-center">
          <div class="text-center fs-3 pt-3 text-dark">Entre em contato através do WhatsApp:</div>
          <div class="pt-2">
            <a href="https://wa.me/+5535988434758" target="_blank" rel="noopener noreferrer">
              <button type="button" class="btn btn-success wpp-button-contact-page">
                <i class="bi bi-whatsapp"></i> (35) 98843-4758
              </button></a
            >
          </div>
          <div class="pt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14862.038041234116!2d-45.51967893022461!3d-21.36983379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca83ea1f90ceb5%3A0x25acdb02d6964a9f!2sR.%20Francisco%20Garc%C3%ADa%20Miranda%2C%20130%20-%20Botafogo%2C%20Tr%C3%AAs%20Pontas%20-%20MG%2C%2037190-000!5e0!3m2!1spt-BR!2sbr!4v1680636619303!5m2!1spt-BR!2sbr"
              width="90%"
              height="350"
              style="border: 0; border-radius: 1rem"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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

.a-wpp {
  text-decoration: none;
  color: black;
}
.a-wpp:hover {
  color: rgb(69, 211, 3);
}
</style>
