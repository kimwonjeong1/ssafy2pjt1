<template>
  <div class="user" id="login">
    <div class="wrapC table">
      <div class="middle">
        <h1>SS_log</h1>
        <div class="input-wrap">
          <input
            v-model="loginData.email"
            id="email"
            placeholder="이메일을 입력해주세요"
            type="text"
          />
        </div>
        <div class="input-wrap">
          <input
            v-model="loginData.password"
            type="password"
            id="password"
            placeholder="영문, 숫자 혼용 8자 이상"
          />
        </div>
        <button class="btn btn--back btn--login" @click="login">
          로그인 하기
        </button>
        <div class="add-option">
          <div class="wrap">
            <p>아직 회원이 아니신가요?</p>
            <router-link
              v-bind:to="{ name: constants.URL_TYPE.USER.JOIN }"
              class="btn--text"
            >
              회원가입
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/user.scss";
import constants from "../../lib/constants";

export default {
  name: "Login",
  components: {},
  created() {
    console.log(constants.URL_TYPE.POST.MAIN);
  },
  watch: {},
  methods: {
    login() {
      var exptext = /^[A-Za-z0-9+]{8,}$/;
      if (this.loginData.email.indexOf("@") == -1) {
        alert("이메일 양식을 지켜주세요!");
        return;
      }
      if (exptext.test(this.loginData.password) == false) {
        alert("비밀번호 양식을 지켜주세요!");
        return;
      }

      this.$emit("submit-login-data", this.loginData);

      console.log(this.loginData);
    },
  },
  data: () => {
    return {
      constants,
      loginData: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
