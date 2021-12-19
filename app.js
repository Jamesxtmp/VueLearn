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
    }
})
app.mount('#AppVue')