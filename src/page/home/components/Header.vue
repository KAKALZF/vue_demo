<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data () {
      return {
        msg: 'hello.vue'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    line-height: 1.86rem
    background: #00bcd4
    color: #fff
    display: flex
    .header-left
      float: left
    .header-input
      flex:1
      background:#fff
      color: #ccc
    .header-right
       float: right
       text-align:center

</style>
