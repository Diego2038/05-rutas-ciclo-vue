<template>
  <h1>About Page</h1>
  <hr>
  <h3>{{ nombre }}</h3>
  <button @click="cambiarNombre">Cambiar name</button>
</template>  


<script>
// Se implementará los hooks por órden de aparación
export default {

  data(){
    return {
      nombre : 'Juan Diego'
    }
  },

  methods:{
    cambiarNombre(){
      console.log('Se cambió el nombre a Pablo')
      this.nombre = "Pablo"
    }
  },

  beforeCreate() { 
    console.log("beforeCreate") 
  },

  created() { 
    console.log("created") 
  },

  beforeMount() { 
    console.log("beforeMount") 
  },

  mounted() { 
    console.log("mounted") 
  },

  beforeUpdate() { 
    console.log("beforeUpdate") 
  },

  updated() { 
    console.log("updated") 
  },

  activated() { 
    console.log("activated") 
  },

  deactivated() { 
    console.log("deactivated") 
  },

  beforeUnmount() { 
    console.log("beforeUnmount") 
  },

  unmounted() { 
    console.log("unmounted") 
  },

  errorCaptured() { 
    console.log("errorCaptured") 
  },

  renderTracked() { 
    console.log("renderTracked") 
  },

  renderTriggered() { 
    console.log("renderTriggered") 
  }


}
</script>