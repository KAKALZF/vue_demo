<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{password}}</h2>
    <ol>
      <li v-for="city in citise">
        {{city.name}}
      </li>
    </ol>
    <input @click="submit"> 点击获取1</input>
    <input @click="submit2"> 点击获取2</input>
    <Child></Child>
  </div>
</template>

<script>
  import axios from 'axios';

  var Child = {
    template: '<h1>自定义组件!</h1>'
  }
  export default {
    name: 'home',
    components: {Child},
    data: function () {
      return {
        citise: [],
        password: 'judian3321',
        msg: 'hello.vue'
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
