<template>
  <div id="header" v-if="isHeader">
    <h1>
      <router-link v-bind:to="{ name: constants.URL_TYPE.POST.MAIN }">
        SS_log
      </router-link>
    </h1>
    <div class="right">
      <div class="search-input">
        <i class="fas fa-search"></i>
        <input v-model="keyword" type="text" />
      </div>
      <span v-if="constants.LS_KEY.USER_TOKEN != ''">
        <router-link
          v-bind:to="{ name: constants.URL_TYPE.USER.PROFILE }"
          class="login-btn"
        >
          마이페이지
        </router-link>
        <router-link
          v-bind:to="{ name: constants.URL_TYPE.POST.MAIN }"
          @click.native="logout"
          class="login-btn"
        >
          로그아웃
        </router-link>
      </span>
      <span v-else>
        <router-link
          v-bind:to="{ name: constants.URL_TYPE.USER.JOIN }"
          class="login-btn"
        >
          회원가입
        </router-link>
        <router-link
          v-bind:to="{ name: constants.URL_TYPE.USER.LOGIN }"
          class="login-btn"
        >
          로그인
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import constants from "../../lib/constants";

export default {
  name: "Header",
  components: {},
  props: ["isHeader", "isLogin"],
  computed: {},
  watch: {},
  created() {
    // if (this.$cookies.isKey('auth-token')) {
    // this.isLogin = true
    // } else {
    // this.isLogin = false
    // }
  },
  methods: {
    logout() {
      constants.LS_KEY.USER_TOKEN = "";
      //   this.$router.push("");
    },
  },
  data: function() {
    return {
      constants,
      keyword: "",
    };
  },
};
</script>
