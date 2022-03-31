<template>
  <b-container
      fluid
      class="header__container"
  >
   <b-container>
     <b-row class="my-1">
       <b-col sm="8">
         <b-form-input
             id="input-default"
             placeholder="Search"
             v-model="searchLine"
             @keypress.enter="newSearch"
         ></b-form-input>
       </b-col>
     </b-row>
   </b-container>
    <b-container fluid>
    <nav class="header__nav">
      <b-row class="my-1">
      <b-col sm="4">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </b-col>
      </b-row>
    </nav>
    </b-container>
  </b-container>

</template>

<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "HeaderComp",
  data() {
    return {
      searchLine: ""
    }
  },
  computed: {
    ...mapGetters(["getSearch"])
  },
  methods: {
    ...mapMutations(["getNewSearch"]),
    newSearch() {
      this.$store.dispatch("handleSearchValue", this.searchLine)
      this.searchLine = ""
    }
  }
}
</script>

<style lang="scss">
.header__ {

  &container {
    background-color: #E7E2E2FF;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &search {
    display: flex;
    flex-direction: row;
    min-width: auto;
  }

  &nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    .row {
      flex-wrap: nowrap;
    }

    .col-sm-4 {
      width: 100%;
    }
  }
}

</style>