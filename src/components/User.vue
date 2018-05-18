<template>
  <div class="hello">
    <input @click="submit2"> 点击获取2</input>
    <ul>
      <li v-for="user in userList">{{user.username}}</li>
    </ul>
    <Child></Child>
  </div>
</template>

<script>
  import axios from 'axios';

  var Child = {
    template: '<h1>自定义组件!</h1>'
  }
  export default {
    name: 'user',
    components: {Child},
    data: function () {
      return {
        userList: []
      }
    },
    methods: {
      submit2: function () {
        let result = null;
        axios.get('/api/hello/kaka')
          .then(
            res => {
              this.userList = res.data.data;
            }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
