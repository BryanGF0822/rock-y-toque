import {defineStore} from 'pinia';
export const useInstrumentStore = defineStore("instruments", {
    state : () => ({
        instruments: localStorage.getItem("instruments") ? JSON.parse(localStorage.getItem("instruments")) :[
            {
                image: '../../public/img/products/guitarFender.jpg',
                name: 'Guitarra Electica Fernder',
                description:'Guitarra electrica de alta calidad, construida con madera de roble. Perfecta para rockandroll y jazz',
                price: '200',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
            {
                image: '../../public/img/products/ukelele.jpg',
                name: 'Ukelele AMG',
                description:'Ukele para tardes de playa, reunion con amigos y muchas mas.',
                price: '500',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
            {
                image: '../../public/img/products/trompeta.jpg',
                name: 'Trompeta Magna',
                description:'Trompeta profesional, ideal para conciertos, especialmente para el genero de la salsa.',
                price: '600',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
            {
                image: '../../public/img/products/microphone.jpg',
                name: 'Microfono Rt507 Studio',
                description:'Microfono profesional, perfecto para grabacion de voz nivel studio.',
                price: '1200',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
            {
                image: '../../public/img/products/arpa.jpg',
                name: 'Arpa artesanal XL',
                description:'Arpa de roble, fabricada de manera artesanal, perfecta para una filarmonica.',
                price: '200',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
            {
                image: '../../public/img/products/bajoJackson.jpg',
                name: 'Bajo Jackson F20 Custom',
                description:'Bajo F20, perfecto para concierto, especial para generos del rock.',
                price: '200',
                manufacturer: '',
                manufacturers: ['Gibson', 'Fender', 'Jupiter', 'Mapex', 'Ibanez', 'Jackson', 'Pearl'],
                category: '',
                categories: ['Guitar', 'Drums', 'Bass', 'Piano', 'Studio']
            },
        ]
    }),
    getters: {
        getInstruments: (state) => [...state.instructions],
    },
    actions: {
        newInstrument(instrument) {
            this.instructions = [...this.instruments, instrument]
            localStorage.setItem('instructions', JSON.stringify(this.instruments))
        }
    }
});