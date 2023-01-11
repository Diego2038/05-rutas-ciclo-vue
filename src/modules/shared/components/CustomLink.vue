<template>
  <a v-if="isExternalLink"
  target="_blank" 
  class="normal-link"
  :href="link.to">{{ link.name }}</a>

  <router-link v-else
    :to="definirParametros()"  
    v-slot="{ isActive}"
    > 
    <!-- href, isActive-->
     <a  
     :class=" (isActive)? 'is-active': 'normal-link' ">
     {{link.name}}
    </a>
  </router-link>

</template>

<script>
export default {
  props:{
    link : {
      type: Object,
      required: true
    }
  },

  methods: {
    definirParametros() {
      let resp = null
      if( this.link.pokemonid ){
        resp = { name : this.link.to, params : { pokemonid : this.link.pokemonid} }
      } else {
        resp = { name: this.link.to}
      } 
      return resp
    }
  },

  computed: {
    isExternalLink(){
      return this.link.to.startsWith('http')
    }
  }
}
</script>

<style scoped>

.is-active {
  color: #42b983;
}

.normal-link {
  color: #c6c5c5;
}

</style>