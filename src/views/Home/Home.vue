<template>
  <div>
    
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  data () {
    return {
      value: 'test'
    }
  },
  methods: {
    handleClick () {
      this.$weui.alert('图形验证码不能为空！')
    }
  },
  components: {
    Footer,
  }
}
</script>

<style  lang='scss' scoped>

</style>
