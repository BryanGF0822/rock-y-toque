<template>
    <div class="cardsContainer">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="../../public/img/cardGroup01.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Our history</h5>
                        <p class="card-text">From the architecture in La Candelaria, which saw the birth of the city of Bogota,
                             the name of this Casa del Musico Rock&Toque was born in 1973.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../../public/img/cardGroup02.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Visit our stores</h5>
                        <p class="card-text">Get to know our addresses and contact numbers in Bogota. We also ship to all Colombia.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../../public/img/cardGroup03.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Terms and warranties</h5>
                        <p class="card-text">Find here the terms and conditions, warranties and product recommendations and handling.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardGroup',
    components: {

    }
}
</script>

<style lang="scss">

.cardsContainer {
    max-width: 70%;
    margin: 20px auto;
    text-align: center;
}

</style>