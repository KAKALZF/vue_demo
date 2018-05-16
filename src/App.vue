<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>hello vue.js</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{citise}}</h2>
    <input @click="submit"> 点击获取1</input>
    <input @click="submit2"> 点击获取2</input>
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
        citise: []
      }
    },
    methods: {
      submit: function () {
        let result = null;
        alert('hello haha');
//        axios.get('/api/hello/kaka')
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
              console.log(res.data.data[0].password)
            }
          )
      },
    }
  };
</script>
