<template>
  <div id="app">
    <HeaderComp/>
    <TableView/>
    <FooterComp/>
    <router-view/>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import TableView from "@/components/TableView";
export default {
  components: {TableView, FooterComp, HeaderComp}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //height: calc(100vh - 172px);
  //height: 100vh;
}

</style>
