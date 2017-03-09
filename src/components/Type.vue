<template>
  <div>
    <grid>
      <grid-item :link="{path: '/roomlist/'+i.cate_id}" :label="i.game_name" v-for="i in alltype" :key="i">
        <img slot="icon" :src="i.game_icon">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
  components: {
    Grid,
    GridItem
  },
  data () {
    return {
      alltype: []
    }
  },
  created () {
    this.$http.get('/api/RoomApi/game').then((response) => {
      //xhr请求成功执行
      this.alltype = response.data.data
    }, (response) => {
      //xhr请求失败执行
    })
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.weui-grid__icon img{
  border-radius: 50%;
}
</style>
