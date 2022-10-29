<template>
  <hr />
  <div class="container">
    <form @submit="addInstrument">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input
        v-model="instrument.name"
          type="text"
          class="form-control"
        />
        <div  class="form-text">
          Nombre o referencia del producto.
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Descripcion</label>
        <input v-model="instrument.description" type="text" class="form-control"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Precio</label>
        <input v-model="instrument.price" type="text" class="form-control"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Marca</label>
        <select v-model="instrument.manufacturer" class="form-control" >
            <option value="" disabled>Seleccionar marca</option>
            <option value="Gibson" >Gibson</option>
            <option value="Fender" >Fender</option>
            <option value="Mapex" >Mapex</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Categoria</label>
        <select v-model="instrument.category"  class="form-control" >
            <option value="" disabled>Seleccionar categoria.</option>
            <option value="Guitar" >Guitar</option>
            <option value="Drums" >Drums</option>
            <option value="Studio" >Studio</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {generateId} from "../helpers/index";
import { mapStores } from "pinia";
import {useInstrumentStore} from "../stores/instruments"
export default {
  data() {
    return {
      instrument: {
        image: "",
        name: "",
        description: "",
        price: "",
        manufacturer: "",
        category: "",
      },
    };
  },
  methods: {
    addInstrument: function(e){
        e.preventDefault();
        this.instrumentsStore.newInstrument({id: generateId(), ...this.instrument})
    }
  },
  computed:{
    ...mapStores(useInstrumentStore)
  }
};
</script>

<style lang="scss">
.container {
  width: 50%;
  height: 70%;
}
</style>
