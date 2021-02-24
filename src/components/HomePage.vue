<template>
     <el-aside style="width:200px">
      <div class="logo">手游运营管理后台</div>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#0b2431"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <router-link to="/" tag="span" ><span>后台首页</span></router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>游戏管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><router-link to="/game/IOS" tag="span"><span>IOS游戏</span></router-link></el-menu-item>
            <el-menu-item index="2-2">Android游戏</el-menu-item>
          </el-menu-item-group>    
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-s-custom"></i>
          <router-link to="/player" tag="span"><span >玩家管理</span></router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">运营管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-data"></i>
          <span slot="title">数据报表</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-message"></i>
          <span slot="title">群发邮件</span>
        </el-menu-item>
         <el-menu-item index="7">
          <i class="el-icon-box"></i>
          <span slot="title">服务器管理</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
$backcolor: #0b2431;
$a3: #d1d1d1;
.logo {
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  color: $a3;
  border-bottom: 1px solid #4B7E8C;
}

.el-aside {
  background-color: $backcolor;
}

</style>