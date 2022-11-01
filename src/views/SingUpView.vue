<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
        <div class="col-6">
          <form>
            <h1>Sing Up</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              required = "true"
              v-model = "email"  
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              required = "true"
              v-model = "password"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              required = "true"
              v-model = "confirmPassword"
            />
          </div>
          <button @click="newUser" type="submit" class="btn btn-primary">Register</button>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// import {useAuthenticationStore} from '../stores/authentication';
// import { mapStores } from 'pinia';
export default {
  // data(){
  //     return {
  //       email: '',
  //       password: '',
  //       confirmPassword: '',
  //     }
  //   },
  //   methods:{
  //     newUser(e){
  //       e.preventDefault();
  //       if(this.password === this.confirmPassword){
  //           this.authenticationStore.newUser(this.email, this.password);
  //       }else{
  //           alert('Passwords no coinciden');
  //       }
  //     },
  //     userExist(e){
  //       e.preventDefault();
        
  //     }
  //   },
  //   computed:{
  //     ...mapStores(useAuthenticationStore)
  //   },
  //   mounted() {
  //       console.log(this.authenticationStore.auth.currentUser);
  //   },
};
</script>

<style lang="scss">
.container {
  padding: 70px;
}
</style>
