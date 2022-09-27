<template>
    <!-- <ul>
      <li>
        <Card/>
      </li>
      <li>
        <Card/>
      </li>
      <li>
        <Card/>
      </li>
    </ul> -->
    <div class="container-fluid bisabuelo">
    <ul class="row card-products">
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-6 card-product"><Card /></li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card,
  }
}
</script>

<style lang="scss">
.card-product{
  padding: 20px;
  list-style: none
}
</style>
