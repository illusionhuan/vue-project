<template>
  <div id="app">
    <div id="nav">
      <!-- <vue-particles
        color="#555"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="4"
        linesColor="#555"
        :linesWidth="1"
        :linesLinked="true"
        :linesOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      /> -->
    </div>
    <router-view/>
  </div>
</template>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 0px; */
    margin: 0px;
    width:100%;
    height:100%;
    position:absolute;
	background-size:100% 100%;
	background-position: center;
  background-image:url("./assets/9.jpg");
  }
body{
  margin: 0px;
}
/**.lizi{
  position: fixed;
  top: 0;
  width: 100%;
}**/
</style>
