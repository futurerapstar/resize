<template>
  <div class="map-box">
    <div id="container"></div>
    <div class="map-box-input-card">
      <h4>轨迹回放控制</h4>
      <div class="input-item">
        <input type="button" value="开始动画" @click="startAnimation" />
        <input type="button" value="暂停动画" @click="pauseAnimation" />
      </div>
      <div class="input-item">
        <input type="button" value="继续动画" @click="resumeAnimation" />
        <input type="button" value="停止动画" @click="stopAnimation" />
      </div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  name: "AMap",
  data() {
    return {
      aMap: null,
      geolocation: null,
      marker: null,
      lineArr: [
        [120.252202, 30.245262],
        [120.250409, 30.246961],
        [120.219643, 30.26209],
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // let _this = this
      this.aMap = new AMap.Map("container", {
        center: [120.252202, 30.245262],
        resizeEnable: true,
        zoom: 10,
      });
      // this.aMap.plugin('AMap.Geolocation', function () {
      //   _this.geolocation = new AMap.Geolocation({
      //     enableHighAccuracy: true,//是否使用高精度定位，默认:true
      //     timeout: 10000,          //超过10秒后停止定位，默认：无穷大
      //     maximumAge: 0,           //定位结果缓存0毫秒，默认：0
      //     convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      //     showButton: true,        //显示定位按钮，默认：true
      //     buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
      //     buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //     showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      //     showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
      //     panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
      //     zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      //   });
      //   _this.aMap.addControl(_this.geolocation);
      //   _this.geolocation.getCurrentPosition(function (status, result) {
      //     if (status == 'complete') {
      //       _this.onComplete(result)
      //     } else {
      //       _this.onError(result)
      //     }
      //   });

      // })
      this.marker = new AMap.Marker({
        map: this.aMap,
        position: [120.252202, 30.245262],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: -90,
      });

      // 绘制轨迹
      new AMap.Polyline({
        map: this.aMap,
        path: this.lineArr,
        showDir: true,
        strokeColor: "#28F", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      var passedPolyline = new AMap.Polyline({
        map: this.aMap,
        // path: lineArr,
        strokeColor: "#AF5", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      this.marker.on("moving", function(e) {
        passedPolyline.setPath(e.passedPath);
      });

      this.aMap.setFitView();
    },
    onComplete(data) {
      var str = [];
      str.push("定位结果：" + data.position);
      str.push("定位类别：" + data.location_type);
      if (data.accuracy) {
        str.push("精度：" + data.accuracy + " 米");
      } //如为IP精确定位结果则没有精度信息
      str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
    },
    onError(data) {
      console.log(data);
    },
    startAnimation() {
      this.marker.moveAlong(this.lineArr, 800);
    },
    pauseAnimation() {
      this.marker.pauseMove();
    },
    resumeAnimation() {
      this.marker.resumeMove();
    },
    stopAnimation() {
      this.marker.stopMove();
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 1080px;
}
.map-box {
  position: relative;
  &-input-card {
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 300px;
    height: 150px;
    background: #fff;
    input {
      margin: 10px;
    }
    h4 {
      color: rgb(17, 18, 19);
      margin: 10px;
    }
  }
}
</style>
