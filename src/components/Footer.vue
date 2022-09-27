<template>

    <body>
        <!-- <div class="content d-flex align-items-center bg-light">
      <h2 class="w-100 text-center">Footer #7</h2>
    </div> -->

        <div class="separador">
            <hr class="hr-text" />
        </div>

        <footer class="footer-48201">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 pr-md-5">
                        <a href="#" class="footer-site-logo d-block mb-4">
                            <img src="../../public/img/logo.png" width="150" height="150" />
                            Rock&Toque
                        </a>
                        <p>
                            La música es el recuerdo que permanece. La música es el camino que
                            te guía cuando estás sin rumbo. La música es la puerta a tu propio
                            mundo.
                        </p>
                    </div>
                    <div class="col-md">
                        <ul class="list-unstyled nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md">
                        <ul class="list-unstyled nav-links">
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Journal</a></li>
                        </ul>
                    </div>
                    <div class="col-md">
                        <ul class="list-unstyled nav-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div class="col-md text-md-center">
                        <p class=""><a href="#" class="btn btn-tertiary">Contact Us</a></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 text-center">
                        <div class="copyright mt-5 pt-5">
                            <p><small>Univesidad ICESI.</small></p>
                            <p>
                                <small>Proyecto: Programacion Web Avanzada by Bryan Guapacha.</small>
                            </p>
                            <p><small>&copy; 2022 All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</template>

<script>
export default {
    name: "Footer",
    components: {},
};
</script>

<style lang="scss">
body {
    font-family: "Roboto";
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: "Roboto";
}

a {
    transition: 0.3s all ease;

    &,
    &:hover {
        text-decoration: none !important;
    }
}

.content {
    height: 70vh;
}

// footer 7
.footer-48201 {
    padding: 7rem 0;
    background-color: rgb(0, 0, 0);
    color: #777;

    .footer-site-logo {
        font-size: 1.5rem;
        color: white;
    }

    .nav-links {
        li {
            margin-bottom: 10px;

            a {
                color: darken(white, 50%);

                &:hover {
                    color: white;
                }
            }
        }
    }

    .btn {
        &.btn-tertiary {
            background-color: #e9d600;
            color: white;
            border-radius: 30px;
            border: none;
            padding: 10px 20px;
        }
    }

    .social {
        li {
            display: inline-block;

            a {
                color: darken(white, 50%);
                padding: 7px;

                &:hover {
                    color: white;
                }
            }
        }
    }

    .copyright {
        border-top: 1px solid darken(white, 75%);
    }
}

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