
<template>
  <input type="text" v-model="info">
</template>

<script> 
export default {
  name: 'Prove',

  data() {
    return {
      info: ''
    }
  },
  

  watch: {
    info ( value, oldValue ) {
      console.log({value, oldValue})
    }
  }

}
</script>

<style scoped >
input {
  margin: 5px;
  border: 1px black solid;

}
</style>