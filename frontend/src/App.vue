<template>
  <div id="app">
    <Header :isHeader="isHeader" :isLogin="isLogin" />
    <router-view @submit-login-data="login" />
    <!-- <router-view @submit-logout="logout" /> -->
  </div>
</template>

<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<script>
import "./assets/css/style.scss";
import Header from "./components/common/Header.vue";
import constants from "./lib/constants";
import axios from "axios";

const BACK_URL = "http://localhost:8080";
export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    let url = this.$route.name;
    console.log("token", constants.LS_KEY.USER_TOKEN);

    this.checkUrl(url);
  },
  watch: {
    $route(to) {
      this.checkUrl(to.name);
    },
  },
  methods: {
    checkUrl(url) {
      let array = [constants.URL_TYPE.USER.LOGIN, constants.URL_TYPE.USER.JOIN];

      let isHeader = true;
      array.map((path) => {
        if (url === path) isHeader = false;
      });
      this.isHeader = isHeader;
    },
    setCookie(key) {
      this.$cookies.set("auth-token", key);
      this.isLogin = true;
    },
    login(loginData) {
      axios
        .get(
          `${BACK_URL}/account/login/${loginData.email}/${loginData.password}`
        )
        .then((response) => {
          // this.setCookie(response.data.key)
          console.log(response.data.uid);
          console.log("token", constants.LS_KEY.USER_TOKEN);

          if (response.status == 200) {
            constants.LS_KEY.USER_TOKEN = response.data.uid;

            this.isLogin = true;
            this.$router.push("/");
          } else {
            this.$router.push("/error");
          }
        })
        .catch((errors) => {
          this.$router.push("/error");
          console.log(errors.response.data);
        });
    },

    // logout() {
    //   const requestHeaders = {
    //     headers: {
    //       Authorization: `Token ${this.$cookies.get('auth-token')}`
    //     }
    //   }
    //   axios.post(`${BACK_URL}/rest-auth/logout/`, null, requestHeaders)
    //     .then(() => {
    //       this.$cookies.remove('auth-token')
    //       this.isLogin = false
    //       this.$router.push('/')
    //     })
    //     .catch(errors => {
    //       console.log(errors.response.data)
    //     })
    //   },
  },
  data: function() {
    return {
      isHeader: true,
      constants,
      isLogin: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
