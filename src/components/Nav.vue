<template>
  <div class="nav-border">
    <div class="flex circle-container">
      <div class="flex content-center loopBox">
        <div id="lopp"></div>
        <div class="ball" :class="item.class" v-for="(item,index) in list" :key="item.class" @click.stop="handleClick(item,index)" ref="ball">
          <div class="textWrap">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { class: "ball1", name: "echarts", path: "/echarts" },
        { class: "ball2", name: "aMap", path: "/aMap" },
        { class: "ball3", name: "顶顶顶", path: "/biPanel/projectIntro" },
        { class: "ball4", name: "bbbb", path: "/biPanel/cameraList" },
        { class: "ball5", name: "ccc", path: "/biPanel/safetyQuality" },
        { class: "ball6", name: "dd", path: "/biPanel/smartParty" },
        { class: "ball7", name: "eeeeee", path: "/biPanel/laborMangmt" },
      ],
      curIndex: -1,
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push({ path: item.path });
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes animX {
  0% {
    left: 380px;
  }
  100% {
    left: 1442px;
  }
}
@keyframes animY {
  0% {
    top: 176px;
  }
  100% {
    top: 638px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.6);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.6);
  }
}

.ball {
  width: 136px;
  height: 136px;
  background-color: #f66;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  .textWrap {
    width: 136px;
    height: 136px;
    position: relative;
    div {
      position: absolute;
      bottom: -40px;
      left: 0;
      text-align: center;
      width: 136px;
    }
  }
}
//7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
//每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
.ball1 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  // background: url('../assets/images/device.png') no-repeat;
  background-size: cover;
}

.ball2 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate;
  // background: url('../assets/images/green.png') no-repeat;
  background-size: cover;
}

.ball3 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate;
  // background: url('../assets/images/intro.png') no-repeat;
  background-size: cover;
}

.ball4 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate;
  // background: url('../assets/images/monitor.png') no-repeat;
  background-size: cover;
}

.ball5 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.428s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate;
  // background: url('../assets/images/safe.png') no-repeat;
  background-size: cover;
}

.ball6 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -19.285s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate;
  // background: url('../assets/images/smart.png') no-repeat;
  background-size: cover;
}

.ball7 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate;
  // background: url('../assets/images/work.png') no-repeat;
  background-size: cover;
}
#lopp {
  width: 905px;
  height: 462px;
  border-radius: 50%;
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translate(-50%, 0);
  // background: url('../assets/images/bi_center.png') no-repeat;
  background-size: cover;
}
.circle-container {
  width: 1980px;
  height: 740px;
  justify-content: center;
  align-items: center;
  // background: url('../assets/images/border.png') no-repeat;
  background-size: cover;
}
.nav-border {
  width: 100%;
  height: 740px;
  // background: url('../assets/images/nav_bg.png') no-repeat;
  background-size: cover;
  margin-top: 15px;
  .enter {
    font-size: 24px;
    font-weight: bold;
    color: rgba(122, 132, 244, 1);
    height: 32px;
    border-radius: 16px;
    border: 1px solid rgba(122, 132, 244, 1);
    line-height: 32px;
    width: 139px;
    text-align: center;
    cursor: pointer;
  }
  .loopBox {
    width: 1025px;
    height: 622px;
  }
}
</style>
