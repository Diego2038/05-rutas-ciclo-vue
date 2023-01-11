import { createRouter, createWebHashHistory } from 'vue-router'
// import ListPage from '../modules/pokemon/pages/ListPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'  
// import AboutPage from '../modules/pokemon/pages/AboutPage'  
// import NoPageFound from "../modules/shared/pages/NoPageFound";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home', 
    path: '/home', component: () => import (/* webpackChunkName: "Path" */'../modules/pokemon/pages/ListPage')  // carga perezosa
  }, 
  // {
  //   path: '/pokemonid', component: PokemonPage // carga ansiosa
  // },
  {
    name: 'pokemonid123',
    path: '/pokemonid/:pokemonid', component: () => import (/* webpackChunkName: "Pokemon" */'../modules/pokemon/pages/PokemonPage'),
    props: (route) => {
      // console.log( route )
      const pokemonid  = Number(route.params.pokemonid)
      return isNaN( pokemonid ) ? { pokemonid : 1 } : { pokemonid }
      
    }   
  },
  {
    name: 'about',
    path: '/about-page', component:  () => import(/* webpackChunkName: "About123xd" */'../modules/pokemon/pages/AboutPage') 
    // carga perezosa
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