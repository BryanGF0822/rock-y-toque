import {defineStore} from 'pinia';
//import { createClient } from '@supabase/supabase-js'

//SUPABASE
// const supabaseUrl = "https://opjmzhtjywbkohlvzgvj.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wam16aHRqeXdia29obHZ6Z3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwNzM5NjEsImV4cCI6MTk4MjY0OTk2MX0.Lb4wGOYjFphQNtBG9GAWBB7HoTAi5mL3dzGR0gxbJww"

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
        getInstruments: (state) => [...state.instruments],
    },
    actions: {
        newInstrument(instrument) {
            this.instruments = [...this.instruments, instrument]
            localStorage.setItem('instruments', JSON.stringify(this.instruments))
        },
        loadInstruments() {
            this.localStorageInstruments = JSON.parse(localStorage.getItem('instruments'))
        },
        getInstrumentsById(id) {
            const filteredInstruments = this.instruments.filter((instrument) => id.toLowerCase() === instrument.name.toLowerCase());
            return filteredInstruments ? {...filteredInstruments[0]} : null
        },
    },
});