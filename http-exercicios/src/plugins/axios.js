import Vue from 'vue'
import axios from 'axios'

//URL base para acessar o backand
//axios.defaults.baseURL = 'https://curso-vue-lucas.firebaseio.com/'

Vue.use({
    install(Vue){
        //Acessar $http de forma global.
        //Vue.prototype.$http = axios

        //Uma forma de ter várias APIs
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-lucas.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config =>{
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res =>{
            // const array = []
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})