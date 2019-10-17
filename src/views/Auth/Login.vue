<template>
  <div class="about">
    <h1>{{pageName}} - {{description}}</h1>

    <div>
      <form @submit.prevent="login" class="col-md-12">
        <div class="col-md-6 col-md-offset-3">
          <input type="email" name="email" v-model="user.email" class="form-control" />
          <br />
          <input type="password" name="password" v-model="user.password" class="form-control" />
          <br />
          <input type="submit" value="Login" class="btn btn-success" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      pageName: "Login",
      description: "This is the Login Page",
      user: {}
    };
  },
  methods: {
    login() {
      this.$axios
        .post("https://reqres.in/api/login", this.user)
        .then(response => {
          console.log(response.data.token);
          this.$store.dispatch("loginSuccess", response.data);
          this.$router.push({ name: "home" });
        })
        .catch(exception => {
          console.log(exception);
        });
    }
  },
  mounted() {}
};
</script>