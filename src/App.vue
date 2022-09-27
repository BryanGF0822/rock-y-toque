<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink, RouterView,
  },
}
</script>

<template>
  <header>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->

    <nav class="navbar bg-light fixed-top">
      <div class="container-fluid">
        <img src="../public/img/logo.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-start">
        <a class="navbar-brand" href="#">Rock&Toque</a>
      
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <RouterLink class="nav-link active" to="/">Home</RouterLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RouterLink class="nav-link active" to="/about">About Us</RouterLink>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Filter by
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Guitar</a></li>
                  <li><a class="dropdown-item" href="#">Studio</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  height: 60px;
  background-color: white;
  color: white;
  widows: 100%;
}

nav {
  display: flex;
  justify-content: space-around;
}

</style>
