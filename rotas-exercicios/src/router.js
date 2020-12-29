import Vue from 'vue'
import Router from 'vue-router'

// import Menu from './components/template/Menu'
import Menu from './components/template/Menu.vue'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        name:'inicio',
        path: '/',
        //component: Inicio
        components:{
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        component: Usuario,
        props:true,
        children:[
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props:true},
            {path: ':id/editar', component: UsuarioEditar, props:true,
                name:'editarUsuario'},
        ]
    },
    {
        path: '*',
        redirect:'/'
    }
    ]
})