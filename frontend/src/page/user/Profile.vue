<template>
  <div>
    <h2>{{ userData.uid }}님의 회원 정보 조회</h2>
    <!-- <h3>email : {{ userData.email }}</h3>
      <h3>password : {{ userData.password }}</h3> -->
    <h3>
      email :
      <input
        :value="userData.email"
        @input="userData.email = $event.target.value"
        id="email"
        type="text"
      />
    </h3>

    <h3>
      password :
      <input
        :value="userData.password"
        @input="userData.password = $event.target.value"
        id="password"
        type="password"
      />
    </h3>

    <button @click="updateData">회원 정보 수정하기</button>
    <hr />
    <button @click="deleteData">탙퇴하기</button>
  </div>
</template>

<script>
import axios from "axios";
import constants from "../../lib/constants";

const BACK_URL = "http://localhost:8080";
export default {
  name: "Profile",
  data: () => {
    return {
      userData: {
        email: "",
        password: "",
        uid: "",
      },
    };
  },
  created() {
    axios
      .get(`${BACK_URL}/account/${constants.LS_KEY.USER_TOKEN}`) // {uid}
      .then((response) => {
        this.userData.email = response.data.email;
        this.userData.uid = response.data.uid;
        this.userData.password = response.data.password;
      });
  },
  methods: {
    deleteData() {
      axios
        .delete(`${BACK_URL}/account/${this.userData.uid}`, this.userData)
        .then((response) => {
          console.log(response);
          if (response.data == "success") {
            alert("회원정보가 삭제되었습니다 ");
            this.$router.push("/");
          } else {
            alert("회원정보 삭제가 실패했습니다");
            this.$router.push("/error");
          }
        });
    },
    updateData() {
      axios
        .put(`${BACK_URL}/account/${this.userData.uid}`, this.userData)
        .then((response) => {
          console.log(response);
          if (response.data == "success") {
            alert("회원정보가 수정되었습니다!");
            this.$router.push("/");
          } else {
            alert("회원정보 수정이 실패했습니다");
            this.$router.push("/error");
          }
        });
    },
  },
};
</script>

<style></style>
