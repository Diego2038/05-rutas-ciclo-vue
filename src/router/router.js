import { createRouter, createWebHashHistory } from 'vue-router'
// import ListPage from '../modules/pokemon/pages/ListPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'  
// import AboutPage from '../modules/pokemon/pages/AboutPage'  
// import NoPageFound from "../modules/shared/pages/NoPageFound";

const routes = [

  // route Pokemon
  {
    name: 'pokemon',
    path:'/pokemon',
    component: () => import(/*webpackChunkName: "Pokemon"*/ '../modules/pokemon/layouts/PokemonLayout'),
    children : [
      
      {
        name: 'pokemon-home', 
        path: 'home', component: () => import (/* webpackChunkName: "Path" */'../modules/pokemon/pages/ListPage')  // carga perezosa
      }, 
      // {
      //   path: '/pokemonid', component: PokemonPage // carga ansiosa
      // },
      {
        name: 'pokemon-id', // pokemonid123
        path: 'pokemonid/:pokemonid', component: () => import (/* webpackChunkName: "Pokemon" */'../modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          // console.log( route )
          const pokemonid  = Number(route.params.pokemonid)
          return isNaN( pokemonid ) ? { pokemonid : 1 } : { pokemonid }
          
        }   
      },
      {
        name: 'pokemon-about',
        path: 'about-page', component:  () => import(/* webpackChunkName: "About123xd" */'../modules/pokemon/pages/AboutPage') 
        // carga perezosa
      },
      {
        name: 'pokemon-redireccion',
        path: '',
        redirect: { name: 'pokemon-home'} // Con esto no tienes que insertar rutas absolutas, así si realizas un cambio en el link, no tendrás que cambiarlo también aquí
      }   
    ]
  },

  // route dbz

  {
    name: 'dbz',
    path: '/dbz',
    component: () => import(/*webpackChunkName: "dbz"*/ '../modules/dbz/layout/DragonBallLayout'),
    children: [
      {
        name:'dbz-about',
        path: 'about',
        component: () => import( /*webpackChunkName: "dbzAbout*/ '../modules/dbz/pages/About')
      },
      {
        name:'dbz-characters',
        path: 'characters',
        component: () => import( /*webpackChunkName: "dbzAbout*/ '../modules/dbz/pages/Characters')
      },
      {
        name: 'dbz-redireccion',
        path: '',
        redirect: { name: 'dbz-about'}
      }
    ]
  },



  {
    path: '/:pathMatch(.*)*', 
    component: () => import (/* webpackChunkName: "notFound" */'../modules/shared/pages/NoPageFound') 
  } 
];

const router = createRouter({
  history: createWebHashHistory(), // OJO
  routes,
})

export default router