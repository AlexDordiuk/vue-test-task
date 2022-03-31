import axios from "axios";

export default {
    state: {
        dataArr: [],
        search: ""
    },
    getters: {
        getDataArr: state => state.dataArr
    },
    actions: {
        async fetchPosts(ctx) {
            try {
                const response = await axios.get(`https://data.jsdelivr.com/v1/stats/packages`)
                ctx.commit("getFetchPosts", response)
            } catch (e) {
                console.log(e)
            }
        },
        async handleSearchValue(ctx, searchValue) {
            if (searchValue.length) {
                try {
                    const response = await axios.get(`https://data.jsdelivr.com/v1/package/npm/${searchValue}`)
                    ctx.commit("getFetchPosts", response)
                } catch (e) {
                    console.log(e)
                }
            } else {
                this.dispatch('fetchPosts')
            }

        }
    },
    mutations: {
        getFetchPosts(state, dataArr) {
            state.dataArr = dataArr
        },
        getNewSearch(state, newSearch) {
            state.search = newSearch
            // state.dataArr.data = Object.values(dataArr)
        }
    }
}