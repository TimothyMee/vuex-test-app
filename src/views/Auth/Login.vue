<template>
  <div class="about">
    <h1>{{pageName}} - {{description}}</h1>

    <div>
      <form onSubmit.prevent>
        <div class="col-md-6">
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
  }
};
</script>