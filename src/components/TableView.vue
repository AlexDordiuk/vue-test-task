<template>
  <b-container
      fluid
      class="table__wrapper"
  >
    <b-table
        sticky-header
        striped
        hover
        :items="getDataArr.data"
        class="table__table"
        id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
    ></b-table>
    <b-pagination
        class="page-pagination"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "TableView",
  data() {
    return {
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters(['getDataArr']),
    rows() {
      return this.getDataArr.length
    }
  },
  async mounted() {
    this.$store.dispatch('fetchPosts')
    console.log("dataArr :", this.getDataArr)
  }
}
</script>

<style lang="scss">
.table__ {
  &wrapper {
    height: calc(100vh - (92px + 80px + 38px));
  }
  &table {
    margin-bottom: 0;
    height: 100%;
  }
}
.b-table-sticky-header {
  max-height: none;
}
.page-pagination {
  justify-content: center;
  margin-bottom: 8px;
}
</style>