<template>
  <div>
    <button v-on:click="handleClick">test</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  data () {
    return {
      word: ''
    }
  },
  methods: {
    handleClick () {
      this.$weui.alert('图形验证码不能为空！')
    }
  },
  components: {
    Footer
  }
}
</script>

<style  lang='scss' scoped>

</style>
