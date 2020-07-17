import Vue from "vue";
import Router from "vue-router";
import createPersistedState from "vuex-persistedstate";

import constants from "../lib/constants";

// 유저
import Login from "../page/user/Login.vue";
import Join from "../page/user/Join.vue";
import Profile from "../page/user/Profile.vue";
// 포스트
import List from "../page/post/List.vue";

// 에러
import Errors from "../page/error/Error.vue";
import PAGENOTFOUND from "../page/error/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  plugins: [createPersistedState],
  routes: [
    // 로그인/가입
    {
      path: "/user/login",
      name: constants.URL_TYPE.USER.LOGIN,
      component: Login,
    },
    {
      path: "/user/join",
      name: constants.URL_TYPE.USER.JOIN,
      component: Join,
    },
    // 포스트
    {
      path: "/",
      name: constants.URL_TYPE.POST.MAIN,
      component: List,
    },
    {
      path: "/error",
      name: constants.ERROR.FRONT_ERROR,
      component: Errors,
    },
    {
      path: "/pnf",
      name: constants.ERROR.PAGE_NOT_FOUND,
      component: PAGENOTFOUND,
    },
    {
      path: "/user/profile",
      name: constants.URL_TYPE.USER.PROFILE,
      component: Profile,
    },
  ],
});
