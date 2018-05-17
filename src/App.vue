<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>hello vue.js</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{citise}}</h2>
    <h2>{{password}}</h2>
    <input @click="submit"> 点击获取1</input>
    <input @click="submit2"> 点击获取2</input>
    <router-view></router-view>
    <!-- <router-view/>-->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'App',
    data: function () {
      return {
        name: 'kaka',
        age: '',
        citise: [],
        password: 'judian3321',
      }
    },
    methods: {
      submit: function () {
        let result = null;
        alert('hello haha');
        axios.get('/static/mock/city.json')
          .then(
            res => {
              let result = res.data.data.hotCities;
              console.log(result[0]);
              this.name = result[0].name;
              this.age = result[0].spell;
              this.citise = result;
            }
          )
      },
      clickHandler: function (firstName) {
        this.age = firstName;
      },
      submit2: function () {
        let result = null;
        alert('hello kaka');
        axios.get('/api/hello/kaka')
          .then(
            res => {
              let pwd = res.data.data[0].password
              console.log(pwd);
              this.password = pwd;
            }
          )
      },
    }
  };
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
