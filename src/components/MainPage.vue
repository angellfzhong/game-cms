<template>
  <el-container>
    <el-header>
      <div><span>当前位置：{{ $route.meta.title }}</span></div>
      <div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>管理员</span>
      </div>
    </el-header>
        
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>

</script>

<style lang="scss" scoped>
.el-header {
  color: #333;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  font-size: 12px;
}
.el-main {
  background-color: rgb(248, 249, 251);
}
</style>