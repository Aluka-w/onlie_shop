<template>
  <div id="tabbar">
    <router-link to='/Home' class="tabbar-list">
      <i class="iconfont icon-shouye"></i>
      <span>主页</span>
    </router-link>
    <router-link to='/Message' class="tabbar-list">
      <i class="iconfont icon-xiaoxizhongxin"></i>
      <span>预约</span>
    </router-link>
    <router-link to='/Mine' class="tabbar-list">
      <i class="iconfont icon-wodejuhuasuan"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<style  lang='scss' scoped>
  #tabbar {
    height: 4.1rem;
    width: 100vw;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 1px;
      background:rgba(237,237,237,1);
      top: 0;
    }
    .tabbar-list {
      flex-basis: 4.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:rgba(183,183,183,1);
      &.router-link-active {
        color: rgb(66, 185, 131);
      }
      & > i {
        font-size: 28px;
        height: 35px;
      }
      & > span {
        font-size: 10px;
      }
    }
  }
</style>
