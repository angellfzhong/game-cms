<template>
    <div>
        <newly-added/>
        <div class="main">
            <div class="left">
                <my-echarts/>
            </div>
            <div class="right">
                <user-chart/>
            </div>
        </div>
        
    </div>
</template>

<script>
import NewlyAdded from './Newlyadded'
import MyEcharts from './Echarts'
import UserChart from './UserChart'
export default {
    components:{
        NewlyAdded,MyEcharts,UserChart
    }
}
</script>

<style scoped>
.main {
    margin: 10px 0;
    display: flex;
    font-size: 14px;
}
.left {
    flex: 1;
}
.right {
    flex: 1;
}
</style>