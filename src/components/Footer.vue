<template>
    <div class="weui-footer">
      <p class="footer-bar">
        <router-link to='/Message'>店铺主页</router-link>
        <span>|</span>
        <router-link to='/Message'>个人中心</router-link>
        <span>|</span>
        <router-link to='/Message'>意见反馈</router-link>
      </p>
      <p class="footer-text">Copyright &copy; 三剑客</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      word: ''
    }
  },
  methods: {

  }
}
</script>

<style  lang='scss' scoped>
  .weui-footer {
    .footer-bar {
      position: relative;
      & > a {
        color: #586C94;
        font-size: 12px;
      }
      & > span {
        font-size: 14px;
        color: #999;
        display: inline-block;
        margin: 0px 10px;
      }
    }
    .footer-text {
      margin-top: 1rem;
      font-size: 12px;
      color: #999;
    }
  }
</style>
