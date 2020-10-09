<template>
  <div>
    <div ref="echartDom" class="echartDom" />
  </div>
</template>

<script>
import echartOption from "./option";
export default {
  name: 'charts',
  methods: {
    initChart () {
      let echartDom = this.$refs.echartDom;
      if (!echartDom) {
        console.warn("没有找到可渲染的chart-body");
        return;
      }
      if (!this.$Echart) {
        console.warn("echart 未挂载在vue下");
        return;
      }
      let chart = this.$Echart.init(echartDom);
      chart.setOption(echartOption)
    },
  },
  mounted () {
    this.initChart()
  },
}
</script>

<style lang="scss" scoped>
.echartDom {
  width: 1920px;
  height: 1080px;
}
</style>