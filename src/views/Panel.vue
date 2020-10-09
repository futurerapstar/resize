<template>
  <div id="panel">
    <div class="scale-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
let autoScale = function () {
  var timeTicket;

  var width = 1920;
  var height = 1080;

  var isIE = (function () {
    var b = document.createElement("b");
    b.innerHTML = "<!--[if IE]><i></i><![endif]-->";
    return b.getElementsByTagName("i").length === 1;
  })();

  var transform = function () {
    var rate = 1;
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    rate = ww < wh ? ww : wh;
    var container = document.getElementsByClassName("scale-box")[0];
    if (isIE) {
      var frameStyle = container.getAttribute("style");
      container.setAttribute(
        "style",
        frameStyle +
        "-ms-transform: scale(" +
        rate +
        "," +
        rate +
        ") translate(-50%, -50%)"
      );
      return;
    }
    container.style.transform = "scale(" + rate + ") translate(-50%, -50%)";
    container.style.WebkitTransform =
      "scale(" + rate + ") translate(-50%, -50%)";
    container.style.MozTransform = "scale(" + rate + ") translate(-50%, -50%)";
  };

  function autoScale () {
    clearTimeout(timeTicket);
    timeTicket = setTimeout(transform, 100);
  }

  transform();
  window.addEventListener("resize", autoScale);
};
export default {
  name: "panel",
  mounted () {
    autoScale();
  },
  beforeDestroy () {
    window.removeEventListener("resize", autoScale);
  }
};
</script>

<style lang="scss" scoped>
#panel {
  background: #161824;
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #fff;
  .scale-box {
    background: #7247d7;
    transform-origin: 0 0;
    position: fixed;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
  }
}
</style>
