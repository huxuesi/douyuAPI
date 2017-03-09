<template>
  <div class="room-list">
    <div class="live-wrap">
      <div class="live-headertitle" :style="{backgroundImage: 'url('+iconimglist[0]+')'}">{{roomlisttitle}}</div>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2" v-for="room in roomlist">
          <router-link to="" class="live-list">
            <div class="live-room">
              <img :src="room.room_src" class="live-img">
              <div class="live-room-up"><img :src="iconimglist[1]" class="live-room-icon">{{room.online}}</div>
              <div class="live-room-bottom"><img :src="iconimglist[2]" class="live-room-icon">{{room.nickname}}</div>
            </div>
            <div class="live-title">{{room.room_name}}</div>
          </router-link>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import hot from 'assets/images/hot.png'
import eyes from 'assets/images/eyes.png'
import person from 'assets/images/person.png'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      iconimglist: [
        hot,
        eyes,
        person
      ],
      roomlist: [],
      roomlisttitle: ""
    }
  },
  /*props: ['roomlistid'],*/
  created () {
    if( this.$route.path === '/push' ){
      var url = 'RoomApi/live'
    }else{
      this.roomlistid = this.$route.params.roomlistid ? this.$route.params.roomlistid : 'lol';
      var url = 'RoomApi/live/'+this.roomlistid
    }
    this.$http.get('/api/'+url).then((response) => {
      //xhr请求成功执行
      this.roomlist = response.data.data
      this.roomlisttitle = this.$route.path === '/push' ? '随机推荐' : this.roomlist[0].game_name
    }, (response) => {
      //xhr请求失败执行
    })
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';

  .live-wrap{
    margin-top: 10px;
    background-color: #fff;
  }
  .live-list {
    display: block;
    width: 95.5%;
    margin: 0 0 3% 3%;
  }
  .vux-flexbox-item:nth-child(2n) a.live-list{
    margin-left: 1.5%;
  }
  .live-img{
    display: block;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
  .live-headertitle{
    height: 40px;
    line-height: 42px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-size: 22px;
    text-indent: 33px;
    font-size: 18px;
  }
  .live-room{
    position: relative;
  }
  .live-title{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 3px 0;
    color: #333;
  }
  .live-room-up,.live-room-bottom{
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 12px;
  }
  .live-room-up{
    top: 3px;
    text-align: right;
    padding-right: 6px;
  }
  .live-room-bottom{
    bottom: 3px;
    padding-left: 6px;
  }
  .live-room-icon{
    width: 12px;
    margin-right: 3px;
    vertical-align: middle;
  }
</style>