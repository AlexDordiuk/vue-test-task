import Vue from 'vue'
import Vuex from 'vuex'

import PersonalInfo from "@/store/PersonalInfo";
import FetchData from "@/store/FetchData";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PersonalInfo,
    FetchData
  }
})
