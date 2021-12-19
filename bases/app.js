const app = Vue.createApp({
    // template: `
    //     <h1> Hola Mundo </h1>
    //     <p> Desde Vue </p>
    // `

    data(){
        return{
            message: 'Hola mundo',
            title: 'La programacion',
            autor: 'Jaime'
        }
    },
    methods: {
        cambiarAutor(event){
            console.log('Click', event)
            this.autor = 'Jaime Malo'
            this.capitalizar()
        },
        capitalizar(){
            this.title = this.title.toUpperCase()
        }
    }
})
app.mount('#AppVue')