<template>
    <div class="addback">
        <div class="type">
            新增玩家
            <ul class="newly">
                <li class="yesterday">
                    <p class="num">23</p>
                    <p>昨日新增</p>
                </li>
                <li class="today">
                    <p class="num">19</p>
                    <p>今日新增</p>
                </li>
            </ul>
        </div>
        <div class="type">活跃玩家
            <ul class="newly">
                <li class="yesterday" style="background-color:rgb(36,172,242)">
                    <p class="num">34478</p>
                    <p>昨日活跃</p>
                </li>
                <li class="today" style="color:rgb(36,172,242)">
                    <p class="num">38445</p>
                    <p>今日活跃</p>
                </li>
            </ul>
        </div>
        <div class="type">新增充值
            <ul class="newly">
                <li class="yesterday" style="background-color:rgb(255,152,18)">
                    <p class="num money">99999999.00</p>
                    <p>昨日充值</p>
                </li>
                <li class="today" style="color:rgb(255,152,18)">
                    <p class="num money">9999999.50</p>
                    <p>今日充值</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.addback{
  display: flex;
  flex-direction: row;
  .type{
      flex:1;
      font-size: 14px;
  }
}
.newly {
    min-width: 280px;
    height: 100px;
    display: flex;
    box-sizing: border-box;
    list-style: none;
    border:1px solid #eee;
    box-shadow:3px 3px 3px #ccc ;
    margin:10px 20px 10px 0;
    font-size: 12px;
    li{
        flex: 1;
        padding: 10px 20px;
    }
    .num {
        font-size: 42px;
        line-height: 50px;
    }
    .yesterday{
        background: rgb(93, 163, 163);
        color: white;
    }
    .today{
        background: white;
        color:rgb(93, 163, 163) ;
    }
}
.money {
    font-size: 32px !important;
}
</style>