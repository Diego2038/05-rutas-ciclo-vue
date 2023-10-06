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
          { to: 'pokemon-home', name: 'Pokemons' },
          { to: 'pokemon-id', name: 'Por ID', pokemonid:13  },
          { to: 'pokemon-about', name: 'About'},
          { to: 'prove', name: 'Prueba 😭'},

          { to: 'https://google.com', name: 'Google'},

          { to: 'dbz-about', name: 'DBZ about' },
          { to: 'dbz-characters', name: 'DBZ characters' }
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