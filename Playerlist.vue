<template>
  <el-table :data="playerdata" border style="width: 100%">
    <el-table-column fixed prop="id" label="ID" width="120"> </el-table-column>
    <el-table-column prop="username" label="玩家账号" width="120">
    </el-table-column>
    <el-table-column prop="nickname" label="昵称" width="120">
    </el-table-column>
    <el-table-column prop="level" label="等级" width="100"> </el-table-column>
    <el-table-column prop="recharge" label="充值金额" width="120">
    </el-table-column>
    <el-table-column prop="loginTime" label="登录时间" width="180">
    </el-table-column>
    <el-table-column prop="logoutTime" label="登出时间" width="180">
    </el-table-column>
    <el-table-column
      prop="state"
      :filters="[
        { text: '正常', value: '正常' },
        { text: '禁言', value: '禁言' },
        { text: '封号', value: '封号' },
      ]"
      :filter-method="filterTag"
      label="账号状态"
      width="100"
    >
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.state === '正常' ? 'success' : 'warning'"
          disable-transitions
          >{{ scope.row.state }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">禁言</el-button>
        <el-button type="text" size="small">封号</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss" scoped>
.el-table {
  margin: 20px 0;
}
</style>
<script>

export default {
  props: ["playerdata"],
  methods: {
    handleClick(row) {
      console.log(row);
    },
    filterTag(value, row) {
      return row.state === value;
    },
  },

  data() {
    return {
    };
  },
};
</script>