<template>
  <div class="user" id="join">
    <div class="wrapC table">
      <div class="middle">
        <h1>회원가입</h1>
        <div class="form-wrap">
          <div class="input-wrap">
            <input
              v-model="nickName"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              type="text"
            />
          </div>

          <div class="input-wrap">
            <input
              v-model="email"
              id="email"
              placeholder="이메일을 입력해주세요"
              type="text"
            />
          </div>

          <div class="input-wrap password-wrap">
            <input
              v-model="password"
              id="password"
              :type="passwordType"
              placeholder="비밀번호를 입력해주세요"
            />
            <span :class="{ active: passwordType === 'text' }">
              <i class="fas fa-eye"></i>
            </span>
          </div>

          <div class="input-wrap password-wrap">
            <input
              v-model="passwordConfirm"
              id="password-confirm"
              :type="passwordConfirmType"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <span :class="{ active: passwordConfirmType === 'text' }">
              <i class="fas fa-eye"></i>
            </span>
          </div>
        </div>

        <label>
          <input v-model="isTerm" type="checkbox" id="term" />
          <span>약관에 동의합니다</span>
        </label>

        <span class="go-term">약관 보기</span>

        <button class="btn" @click="signup">
          <span>
            작성완료
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/user.scss";
import axios from "axios";

export default {
  components: {},
  created() {},
  methods: {
    signup() {
      var exptext = /^[A-Za-z0-9+]{8,}$/;
      if (this.email.indexOf("@") == -1) {
        alert("이메일 양식을 지켜주세요!");
        return;
      }
      if (exptext.test(this.password) == false) {
        alert("비밀번호 양식을 지켜주세요!");
        return;
      }
      if (this.password != this.passwordConfirm) {
        alert("비밀번호를 통일시켜주세요!");
        return;
      }

      if (this.isTerm == false) {
        alert("약관을 동의해주세요!");
        return;
      }

      if (this.nickName == "") {
      }
      axios
        .post("http://localhost:8080/account", {
          uid: this.nickName,
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg =
              "회원가입 인증 메일 발송했으니 이메일을 확인해주세요. 회원가입이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/");
        });
    },
  },
  watch: {},
  data: () => {
    return {
      email: "",
      nickName: "",
      password: "",
      passwordConfirm: "",
      isTerm: false,
      passwordType: "password",
      passwordConfirmType: "password",
    };
  },
};
</script>
