<template>
  <div>
    <Carousel />
  </div>
  <div class="separador">
    <hr class="hr-text" />
  </div>
  <div>
    <CardGroup />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CardGroup from '../components/CardGroup.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Carousel, CardGroup, Footer
  }
}
</script>

<style lang="scss">
.separador {
  max-width: 50%;
  margin: 20px auto;
  text-align: center;

  .hr-text {
    position: relative;
    border: 0;
    height: 1.5em;
  }
}
</style>
