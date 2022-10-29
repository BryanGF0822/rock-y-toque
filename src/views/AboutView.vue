<template>
  <hr>
  <div class="container">

    <RouterLink class="btn btn-primary" to="/add">Add new product</RouterLink>
    <ul class="row card-products">
      <li v-for="ins in allInstruments" class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card :instrument="ins" />
      </li>
    </ul>
  </div>

  <RouterView />
</template>

<script>
import { mapStores } from "pinia";
import {useInstrumentStore} from "../stores/instruments"
import { RouterLink, RouterView } from 'vue-router'
import Card from '../components/Card.vue'
export default {
  components: {
    RouterLink, RouterView, Card,
  },
  computed:{
    ...mapStores(useInstrumentStore),
    allInstruments(){
      return this.instrumentsStore.getInstruments
    }
  }
  // setup(){
  //   const store = useInstrumentStore();
  //   return {store};
  // },
}
</script>

<style lang="scss">
.card-product {
  padding: 20px;
  list-style: none
}
</style>
