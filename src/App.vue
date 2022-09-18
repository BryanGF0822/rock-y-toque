<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components:{
    RouterLink, RouterView
  }
}
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer>Copyright</footer>
</template>

<style scoped lang="scss">
header {
  height: 60px;
  background-color: violet;
  color: white;
  widows: 100%;
}
nav {
  display: flex;
  justify-content: space-around;
}
</style>
