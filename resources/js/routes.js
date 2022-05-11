const Home = () => import('./componentes/Home.vue');
const Contacto = () => import('./componentes/Contacto.vue');

//importamos los componentes para el blog

const Mostrar = () => import('./componentes/tienda/Mostrar.vue');
const Crear = () => import('./componentes/tienda/Crear.vue');
const Editar = () => import('./componentes/tienda/Editar.vue');


export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },

    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },

    {
        name:'mostrarTiendas',
        path:'/Tiendas',
        component:Mostrar
    },

    {
        name:'crearTienda',
        path:'/crear',
        component:Crear
    },

    {
        name:'editarTienda',
        path:'/editar/:id',
        component:Editar
    }

];
