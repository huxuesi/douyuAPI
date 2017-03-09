<template>
  <div id="app" style="height:100%;">
    <x-header :left-options="leftOptions" :right-options="{showMore: true}" @on-click-more="showMenus = true" @on-click-title="scrollTop" :title="title" style="width:100%;position:absolute;left:0;top:0;z-index:500;"></x-header>

	  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="53px">
			<transition :name="direction">
	      <router-view class="router-view"></router-view>
	    </transition>
	  </view-box>

	  <tabbar class="app-footer">
      <tabbar-item :link="{path: '/'}" :selected="$route.path === '/'">
        <img slot="icon" v-bind:src="navimglist[0]">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path: '/type'}" :selected="$route.path === '/type'">
        <img slot="icon" v-bind:src="navimglist[1]">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :link="{path: '/push'}" :selected="$route.path === '/push'">
        <img slot="icon" v-bind:src="navimglist[2]">
        <span slot="label">推荐</span>
      </tabbar-item>
    </tabbar>

    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </div>
</template>

<script>
import { XHeader, Tabbar, ViewBox, TabbarItem, Actionsheet } from 'vux'
import newsImgSrc from 'assets/images/news.png'
import musicImgSrc from 'assets/images/music.png'
import picImgSrc from 'assets/images/pic.png'
export default {
  name: 'app',
  components: {
  	XHeader,
  	Tabbar,
  	ViewBox,
  	TabbarItem,
  	Actionsheet
  },
  data () {
    return {
      navimglist: [
      	newsImgSrc,
      	musicImgSrc,
      	picImgSrc
      ],

      menus: {
        menu1: '项目一',
        menu2: '项目二'
      },
      showMenus: false
    }
  },
  beforeCreate () {   //创建前

  },
  created () {  //已创建

  },
  beforeMount () {  //挂载前

  },
  mounted () {  //已挂载

  },
  beforeUpdate () {   //更新前

  },
  updated () {  //已更新

  },
  beforeDestroy () {   //销毁前

  },
  destroyed () {  //已销毁

  },
  methods: {      //方法
  	scrollTop () {
      this.$refs.viewBox.scrollTo(0)
    }
  },
  watch: {       //监听

  },
  computed: {
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
      }
    },
    title () {
      if (this.$route.path === '/') return '首页'
      if (this.$route.path === '/type') return '分类'
      if (this.$route.path === '/push') return '推荐'
    },
    direction () {
      return window.sessionStorage.getItem("direction") === 'forward' ? 'vux-pop-in' : 'vux-pop-out'
    }
  }
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';

	body {
	  background-color: #ececec;
	}
	html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    color: #333;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Helvetica Neue,STHeiti,Microsoft Yahei,Tahoma,Simsun,sans-serif;
  }
	.app-footer{
		position: fixed !important;
	}
	/**
	* vue-router transition
	*/
	.router-view {
	  width: 100%;
	  animation-duration: 0.5s;
	  animation-fill-mode: both;
	  backface-visibility: hidden;
	}
	.vux-pop-out-enter-active,
	.vux-pop-out-leave-active,
	.vux-pop-in-enter-active,
	.vux-pop-in-leave-active {
	  will-change: transform;
	  height: 100%;
	  position: absolute;
	  left: 0;
	}
	.vux-pop-out-enter-active {
	  animation-name: popInLeft;
	}
	.vux-pop-out-leave-active {
	  animation-name: popOutRight;
	}
	.vux-pop-in-enter-active {
	  perspective: 1000;
	  animation-name: popInRight;
	}
	.vux-pop-in-leave-active {
	  animation-name: popOutLeft;
	}
	@keyframes popInLeft {
	  from {
	    opacity: 0;
	    transform: translate3d(-100%, 0, 0);
	  }
	  to {
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	  }
	}
	@keyframes popOutLeft {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	    transform: translate3d(-100%, 0, 0);
	  }
	}
	@keyframes popInRight {
	  from {
	    opacity: 0;
	    transform: translate3d(100%, 0, 0);
	  }
	  to {
	    opacity: 1;
	    transform: translate3d(0, 0, 0);
	  }
	}
	@keyframes popOutRight {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	    transform: translate3d(100%, 0, 0);
	  }
	}
</style>
