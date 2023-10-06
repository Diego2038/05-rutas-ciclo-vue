<template>
  <h1>Pokemon page <span># {{ pokemonid }}</span></h1> 
  <div v-if="pokemon">
    <img :src="pokemon.sprites.back_default" :alt="pokemon.name">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script> 
export default {
  // Definir la información de los query parameters es muchísimo más estable por los props, porque puedes definir el tipo de dato y las especificaciones
  props:{
    pokemonid:{
      type : Number,
      required: true
    }
  },

  methods:{
    async getPokemon( ){ 
      try{  
        const pokemon = await fetch( `https://pokeapi.co/api/v2/pokemon/${this.pokemonid}` )
          .then( resp => resp.json() )
        
        this.pokemon = pokemon
        console.log( this.pokemon )
        // setTimeout(()=> this.$router.push('/pokemon/about-page'), 2500)
        // setTimeout(()=> this.$router.push({name : 'pokemon-about'}), 2500)
      }catch( err ){
        this.$router.push('/') // Con éste push uno puede cambiar a diferentes router-views con el nombre
        console.log('No hay nada que hacer aquí')
      }
    }
  },

  data(){
    return {
      // pokemonid : this.$route.params.pokemonid
      pokemon: null
    }
  },

  created(){
    // Cuando envías props al componente sin estar definidos en 
    console.log( "123") 
    this.getPokemon()
  },

  watch: {
    pokemonid(){
      console.log( this.pokemonid )
      this.getPokemon()
    }
  }
}
</script>

<style>

</style>