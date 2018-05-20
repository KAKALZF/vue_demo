<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <home-header></home-header>>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'hello.vue'
      }
    },
    components :{
      HomeHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
