<template>
    <div class="mycarouselBox">
        <div class="carouselBox">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../public/img/carousel01.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>What is music?</h5>
                            <p>Music is consolation, catharsis, awareness of reality and of oneself, euphoria and calm.
                                The soundtrack that accompanies our life.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../public/img/carousel02.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Ludwig Van Beethoven</h5>
                            <p>Music is a manifestation superior to all wisdom of philosophy.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../public/img/carousel03.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Michael Jackson</h5>
                            <p>Don't try to write the music, let the music write itself.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    components: {

    },
};
</script>


<style lang="scss">
.carouselBox {
    max-width: 70%;
    margin: 0px auto;
    text-align: center;
}
.mycarouselBox {
    background-color: rgba(2, 2, 2, 0.919);
}
</style>
  