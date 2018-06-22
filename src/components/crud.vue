<template>
  <div>
    <div class="container">
      <h2>CRUD</h2>
      <table class="table">
        <thead>
        <tr>
          <th>用户名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in userList">
          <td> {{user.name}}</td>
          <td>{{user.age}}</td>
          <td>
            <button type="button" class="btn btn-success" @click="add">增加</button>
            <button type="button" class="btn btn-warning">修改</button>
            <button type="button" class="btn btn-danger" @click="deleteUser">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  var Child = {
    template: '<h1>自定义组件!</h1>'
  }
  export default {
    name: 'crud',
    components: {Child},
    data: function () {
      return {
        userList: [{"name": "林", "age": 18}, {"name": "易", "age": 17}],
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
              this.username = result[0].name;
              this.age = result[0].spell;
              this.citise = result;
            }
          )
      },
      add() {
        this.userList.push({"name": "kaka", "age": 22});
      },
      deleteUser() {
        this.userList.pop({"name": "kaka", "age": 22});
      }
    }
  }
</script>
