<!-- src/components/NotFound.vue -->
<template>
    <div class="not-found">
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist !</p>
        <p>You can try to return to correct by using the button above the page !</p>
        <div class="loader"></div>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    padding: 20px;
    font-weight: 700;
    font-size: large;
    color: #333;
}

.not-found h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.not-found p {
    font-size: 1em;
    margin-bottom: 20px;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

html {
    font-size: 18px;
}

body {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    line-height: 1.6;
    background: #F2F1EF;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498DB;
  border-radius: 5px;
  animation: load 1.8s ease-in-out infinite;
}

.loader:before,
.loader:after {
  position: absolute;
  display: block;
  content: "";
  animation: load 1.8s ease-in-out infinite;
  height: 10px;
  border-radius: 5px;
}

.loader:before {
  top: -20px;
  left: 10px;
  width: 40px;
  background: #EF4836;
}

.loader:after {
  bottom: -20px;
  width: 35px;
  background: #F5AB35;
}

@keyframes load {
    0% {
        transform: translateX(40px);
    }

    50% {
        transform: translateX(-30px);
    }

    100% {
        transform: translateX(40px);
    }
}
</style>
