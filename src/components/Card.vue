<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="instrument.image" class="img-fluid rounded-start" :alt="instrument.name">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{instrument.name}}</h5>
                    <p class="card-text">{{instrument.description}}</p>
                    <p class="card-text"><small class="text-muted">{{"$" +  instrument.price}}</small></p>
                    <a href="#" class="btn btn-primary">Show more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from "pinia";
import { useInstrumentStore } from "../stores/instruments";

export default {
    props: {
        instrument:{},
    },
    data() {
        return {
            image: "",
            name: "",
            description: "",
            price: "",
            manufacturer: '',
            manufacturers: [],
            category: '',
            categories: []
        };
    },
    computed: {
      ...mapStores(useInstrumentStore),
      allInstruments() {
        return this.instrumentsStore.getInstruments;
      },  
    },
    methods: {
        
    },
    mounted() {
        this.instrumentsStore.loadInstruments()
    }
}
</script>

<style lang="scss">
    
</style>