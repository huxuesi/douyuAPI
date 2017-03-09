<template>
  <div>
    <swiper :list="bannerlist" auto loop :aspect-ratio="160/414"></swiper>
    <Roomlist roomlistid="lol"></Roomlist>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import Roomlist from 'components/Roomlist'

export default {
  components: {
    Swiper,
    Roomlist
  },
  data () {
    return {
      // 广告图列表
      bannerlist: []
    }
  },
  created () {
    this.$http.get('/homeapi').then((response) => {
      //xhr请求成功执行
      response.data.banner.forEach(function(e, i){
        e['url'] = e.id
        e['img'] = e.pic_url
      })
      this.bannerlist = response.data.banner
    }, (response) => {
      //xhr请求失败执行
    })
  }
}
</script>

<style>

</style>