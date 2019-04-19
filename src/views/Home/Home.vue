<template>
  <div class="home">
    <router-link to="/Search" class='home-search'>
      <span>
        <i class='iconfont icon-search'></i>
        搜索课程内容
      </span>
    </router-link>
    <div class="home-swiper">
      <mt-swipe :auto="6000">
        <mt-swipe-item v-for="item in swiperList" :key="item.id">
          <router-link 
            :to="item.link" 
            class="home-swiper-item"
            :style="{backgroundImage: 'url(' + item.img + ')' }"
          />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="home-icon">
      <router-link
        v-for="item in iconList"
        :key="item.id"
        to="/" 
        class='home-icon-wrapper'>
        <i :style="{backgroundImage: 'url(' + item.icon + ')'}"></i>
        <span>{{ item.iconText }}</span>
      </router-link>
    </div>
    <div class="new-recommend">
      <ClassList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ClassList from '@/components/ClassList.vue';
const SwiperList = [
  {
    id: 1,
    img: require('../../assets/images/pic.png'),
    link: '/'
  },
  {
    id: 2,
    img: require('../../assets/images/pic.png'),
    link: '/'
  },
  {
    id: 3,
    img: require('../../assets/images/pic.png'),
    link: '/'
  },
]
const IconList = [
  {
    id: 1,
    icon: require('../../assets/images/head.png'),
    iconText: '热门推荐'
  },
  {
    id: 2,
    icon: require('../../assets/images/head.png'),
    iconText: '热门推荐'
  },
  {
    id: 3,
    icon: require('../../assets/images/head.png'),
    iconText: '热门推荐'
  }
]
export default {
  data () {
    return {
      value: 'test',
      swiperList: SwiperList,
      iconList: IconList
    }
  },
  methods: {
    handleClick () {
      this.$weui.alert('图形验证码不能为空！')
    }
  },
  components: {
    Footer,
    ClassList
  }
}
</script>

<style  lang='scss' scoped>
.home {
  overflow: hidden;
  position: relative;
  .home-search {
    width: 100vw;
    height: 4rem;
    padding: 6px 16px;
    box-sizing: border-box;
    background-color: #fff;
    display: block;
    color: #999;
    font-size: 12px;
    & > span {
      width: 100%;
      height: 100%;
      background-color: rgba(245,245,245,1);
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
  }
  .home-swiper {
    width: 100vw;
    height: 13.75rem;
    .home-swiper-item {
      width: 100%;
      height: 100%;
      display: block;
      background: no-repeat center center;
      background-size: 100% 100%;
    }
  }
  .home-icon {
    height: 5.5rem;
    width: 100vw;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .home-icon-wrapper {
      flex-basis: 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 5px 0;
      box-sizing: border-box;
      color: #b7b7b7;
      & > i {
        width: 100%;
        flex: 1;
        // border: 1px solid #000;
        background:  no-repeat center center;
        background-size: contain;
        margin-bottom: 5px;
      }      
    }
  }
  .new-recommend {
    height: 300px;
    width: 100vw;
    background-color: #fff;
    margin-top: 1rem;
  }
}
</style>
