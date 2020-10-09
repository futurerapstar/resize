<template>
  <div class="parent">
    <header>
      <h1 class="title slide-bar">Stay hungry</h1>
      <p class="subtitle slide-bar">Stay foolish</p>
    </header>
  </div>
</template>

<script>
export default {
  name: "pickMe",
  methods: {
    init() {
      let delay = 0.3;
      let revealText = document.querySelector(".reveal");
      let letters = revealText.textContent.split("");
      revealText.textContent = "";
      let middle = letters.filter((e) => e !== " ").length / 2;
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

.parent {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-bar {
  position: relative;
  color: #333;
  animation: fill-text-white 2s 1.6s forwards;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #35b9f1;
    transform: scaleX(0);
    transform-origin: left;
    animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
  }
}

@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: white;
  }
}

header {
  .title,
  .subtitle {
    width: 250px;
    height: 36px;
  }

  .title {
    margin: 30px 0 0 0;
    font-family: Lora, serif;
    font-size: 32px;
    line-height: 30px;

    &::before {
      background: #ff4081;
    }
  }

  .subtitle {
    margin: 10px 0 0 0;
    font-family: Lato, sans-serif;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    text-transform: uppercase;
    animation-delay: 3.2s;

    &::before {
      background: #03a9f4;
      animation-delay: 2s;
    }
  }
}
</style>