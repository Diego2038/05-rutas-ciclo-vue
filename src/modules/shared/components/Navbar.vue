<template>
  <div>
    <!-- <router-link :to="{ name: 'home'}">Inicio</router-link>   -->
    <!-- <router-link :to="{ name: 'pokemonid123', params: {pokemonid : 13}}">Pokemon ID</router-link>   -->
    <!-- <router-link :to="{ name: 'pokemonid123', params: {pokemonid : 13}}">Pokemon ID</router-link>   -->
    <!-- <router-link :to="{ name: 'about' }">About</router-link>   -->
    <!-- <router-link to="/about-page">About</router-link>   -->
    <!-- <router-link to="/123xd">Error</router-link>   -->

    <CustomLink
      v-for="link in links" :key="link.to"
      :link = link
    />
  </div>

</template>
<script>
import { defineAsyncComponent } from 'vue'; 
  export default {
    data(){
      return {
        links : [
          // La desventaja de usar nombres en vez de objetos literales
          { to: '/home', name: 'Pokemons'},
          { to: '/pokemonid/50', name: 'Por ID'},
          { to: '/about-page', name: 'About'},
          { to: 'https://google.com', name: 'Google'},
        ]
      }
    },

    components : {
      CustomLink : defineAsyncComponent( () => import('./CustomLink.vue')) 
    }
  }
</script>

<style scoped>
  div a {
    margin: 0 10px;
    font-weight: bold;
    color: #2c3e50; 
  }
  div {
    margin: 0 30px ;
  }

  /* a.router-link-exact-active{
    color: #42b98e;
  } */
</style>