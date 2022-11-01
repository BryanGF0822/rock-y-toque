<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <h1>Sing In</h1>
          <div class="mb-3">
            <label for="Email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="Email"
                v-model = "email"
              />
          </div>
          <div class="mb-3">
            <label for="Password1" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="Password1"
                v-model = "password"
              />
          </div>
          <button @click="signIn" type="submit" class="btn btn-primary">Sing In</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from '../stores/authentication'

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      signIn(e) {
        e.preventDefault()
        this.authenticationStore.signIn(this.email, this.password)
      }
    },
    computed: {
      ...mapStores(useAuthenticationStore)
    },
    mounted() {
      console.log(this.authenticationStore.auth)
    }
  };
</script>

<style lang="scss">

</style>
