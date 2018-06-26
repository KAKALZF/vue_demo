<template>
  <div class="container">
    <table class="table">
      <thead>
      <tr>
        <th>用户名</th>
        <th>密码</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in userList">
        <td> {{user.username}}</td>
        <td>{{user.password}}</td>
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
      <li class="page-item" v-for="n in totalPage">
        <a class="page-link" @click="getUserList2($event)">{{n}}</a>
      </li>
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
        userList: [],
        page: 1,
        size: 2,
        totalPage: 0
      }
    },
    methods: {
      add() {
        this.userList.push({"name": "kaka", "age": 22});
      },
      deleteUser() {
        this.userList.pop({"name": "kaka", "age": 22});
      },
      getUserList() {
        axios({
          method: 'get',
          url: '/api/user/page',
          params: {
            page: this.page,
            size: this.size

          }
        }).then(
          res => {
            console.log(res);
            this.userList = res.data.data.content;
            this.totalPage = res.data.data.totalPages;
          })
      },
      getUserList2(event) {
        console.log(event)
        axios({
          method: 'get',
          url: '/api/user/page',
          params: {
            page: this.page,
            size: this.size
          }
        }).then(
          res => {
//            console.log(res);
            this.userList = res.data.data.content;
            this.totalPage = res.data.data.totalPages;
          })
      }
    },
    mounted() {
      this.getUserList();
    }
  }
</script>
