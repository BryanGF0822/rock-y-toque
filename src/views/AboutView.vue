<template>
  <hr>
  <div class="container">

    <RouterLink class="btn btn-primary" to="/add">Add new product</RouterLink>
    <ul class="row card-products">
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card :instrument="instruments" />
      </li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card />
      </li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card />
      </li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card />
      </li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card />
      </li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product">
        <Card />
      </li>
    </ul>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Card from '../components/Card.vue'
export default {
  components: {
    RouterLink, RouterView, Card,
  },
  setup(){
    const store = useInstrumentStore();
    return {store};
  },
}
</script>

<style lang="scss">
.card-product {
  padding: 20px;
  list-style: none
}
</style>
