<template>
  <div>
    <el-cascader placeholder="请选择游戏区服" :options="options" @change="handleChange"></el-cascader>
    <el-input placeholder="请输入玩家id" v-model="playerID"></el-input>
    <el-input placeholder="请输入玩家昵称" v-model="nickname"></el-input>
    <el-button icon="el-icon-search" type="primary" @click="searchPlayer"></el-button>
    <player-list v-bind:playerdata="playerpage" />
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalplayer"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped>
.el-cascader {
  width: 280px;
}
.el-input {
  width: 200px;
  margin-left: 23px;
}
.el-button {
  margin-left: 23px;
}
.block {
  text-align: center;
}
</style>

<script>
import axios from "axios";
import PlayerList from "./Playerlist";

export default {
  components: {
    PlayerList,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      let end = val * 10;
      this.playerpage = this.playerlist.slice(end - 10, end);
    },
    handleChange(value){
      this.searchword = value
    },
    getPlayer() {
      axios
        .get("http://localhost:8080/player.json")
        .then((response) => {
          let player = response.data.list;
          this.totalplayer = player.length;
          this.playerlist = player;
          this.playerpage = player.slice(0, 10);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchPlayer(){
     if(this.searchword.length>=1){
        console.log(this.searchword)
     }
    }
  },
  created() {
    this.getPlayer();
  },
  data() {
    return {
      currentPage: 1,
      playerlist: [],
      playerpage: [],
      totalplayer: 0,
      searchword:[],
      
      options: [
        {
          value: "game1",
          label: "捕鱼达人",
          children: [
            {
              value: "ios",
              label: "IOS",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
            {
              value: "Android",
              label: "Android",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
          ],
        },
        {
          value: "game2",
          label: "欢乐斗地主",
          children: [
            {
              value: "ios",
              label: "IOS",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
            {
              value: "Android",
              label: "Android",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
          ],
        },
        {
          value: "game3",
          label: "水果连连看",
          children: [
            {
              value: "ios",
              label: "IOS",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
            {
              value: "Android",
              label: "Android",
              children: [
                {
                  value: "server1",
                  label: "服务器一",
                },
                {
                  value: "server2",
                  label: "服务器二",
                },
                {
                  value: "server3",
                  label: "服务器三",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

