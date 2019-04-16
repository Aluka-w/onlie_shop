<template>
  <div class="about">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.about {
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  .left {
    height: 100vh;
    background-color: skyblue;
    display: inline-block;
    width: 15.625rem;
  }
  .right {
    height: 100vh;
    background-color: tomato;
    display: inline-block;
    width: 15.625rem;
  }
}
</style>
