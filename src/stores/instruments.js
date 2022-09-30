import {defineStore} from 'pinia';
export const useInstrumentStore = defineStore("instruments", {
    state : () => ({
        instruments: localStorage.getItem("instruments") ? JSON.parse(localStorage.getItem("instruments")) :[
            {
                image: '...',
                name: 'Guitarra Electica Fernder',
                description:'Guitarra electrica de alta calidad, construida con madera de roble. Perfecta para rockandroll y jazz',
                price: '200',
                category: '',
                categories: ['Guitar, Drums, Bass, Piano, Studio,']
            }
        ]
    })
})