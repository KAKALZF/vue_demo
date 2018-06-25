<template>
  <div class="container">
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
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery';
  import bootstrap from 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'

  $(function () {

  });

  export default {
    name: 'page',
    data: function () {
      return {
        userList: [{"name": "林", "age": 18}, {"name": "卡卡", "age": 17}],
      }
    },
    methods: {
      submit: function () {
        let result = null;
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
    },
    mounted: {}
  }
</script>
