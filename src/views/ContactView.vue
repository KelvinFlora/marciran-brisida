<template>
  <div class="container py-0 mt-5 contact-overlay text-light">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      msg: "",
      formError: "",
      sendingForm: false,
      formSent: false
    };
  },

  methods: {
    phoneMask(event) {
      event.preventDefault();

      const key = event.key;
      if (!key || isNaN(Number(key))) {
        return;
      }

      this.phone = this.phone + key;

      let phoneNumber = this.phone.replace(/\D/g, "");
      let formattedPhone = "";

      if (phoneNumber.length < 1) {
        formattedPhone = "";
      } else if (phoneNumber.length < 3) {
        formattedPhone = "(" + phoneNumber;
      } else if (phoneNumber.length < 7) {
        formattedPhone = "(" + phoneNumber.substring(0, 2) + ") " + phoneNumber.substring(2);
      } else if (phoneNumber.length < 11) {
        formattedPhone =
          "(" +
          phoneNumber.substring(0, 2) +
          ") " +
          phoneNumber.substring(2, 6) +
          "-" +
          phoneNumber.substring(6);
      } else {
        formattedPhone =
          "(" +
          phoneNumber.substring(0, 2) +
          ") " +
          phoneNumber.substring(2, 7) +
          "-" +
          phoneNumber.substring(7);
      }

      this.phone = formattedPhone.substring(0, 15);
    },

    submitForm(event) {
      event.preventDefault();

      if (this.sendingForm) return;

      this.formError = "";
      this.formSent = false;

      if (this.name.length <= 0) {
        this.formError = "O nome é obrigatório";
        return;
      }

      if (this.phone.length <= 0) {
        this.formError = "O telefone é obrigatório";
        return;
      }

      if (this.email.length <= 0) {
        this.formError = "O email é obrigatório";
        return;
      }

      if (this.msg.length <= 0) {
        this.formError = "A mensagem é obrigatória";
        return;
      }

      this.sendingForm = true;

      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.msg
      };

      setTimeout(() => {
        console.log("Form submitted", formData);

        this.formSent = true;

        this.name = "";
        this.phone = "";
        this.email = "";
        this.msg = "";

        this.sendingForm = false;
      }, 2000);
    }
  }
};
</script>
