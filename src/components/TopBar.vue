<template>
  <nav class="container">
    <ul class="list">
      <li class="list__item--yellow">
        <router-link to="/" class="li list__item--yellow">Home</router-link>
      </li>
      <li class="list__item--blue">
        <router-link to="/affection" class="li list__item--red"
          >affection</router-link
        >
      </li>
      <li class="list__item--red">
        <router-link to="/friendship" class="li list__item--blue"
          >friendship</router-link
        >
      </li>
      <li class="list__item--blue">
        <router-link to="/love" class="li list__item--red">love</router-link>
      </li>
      <li class="list__item--red">
        <router-link to="/scenery" class="li list__item--blue"
          >scenery</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
}

li {
  display: inline-block;
  padding: 0 20px;
}

.li {
  position: relative;
  display: block;
  cursor: pointer;
  text-decoration: none;
}

.list__item--yellow {
  color: #ffc56c;
}

.list__item--blue {
  color: #6ec5e9;
}

.list__item--red {
  color: #ff5959;
}

.li {
  position: relative;
}

.li:before,
.li:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 4px;
  bottom: -2px;
  margin-top: -0.5px;
  background: linear-gradient(to right, #ffdfaf, #98e0ff, #ff9898);
}

.li:before {
  left: -2.5px;
}

.li:after {
  right: 2.5px;
  background: linear-gradient(to right, #ffdfaf, #98e0ff, #ff9898);
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.li:hover:before {
  background: linear-gradient(to right, #ffdfaf, #98e0ff, #ff9898);
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.li:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
}
</style>
