<template>
  <b-container
      fluid
      class="footer__container"
  >
    <p>Created by {{getMyName}}</p>
    <b-container class="footer__socials">
      <b-link
          :href="social.link"
          v-for="social in getMySocials"
      >{{social.socials}}</b-link>
    </b-container>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "FooterComp",
  computed: {
    ...mapGetters(['getMyName', 'getMySocials'])
  }
}
</script>

<style lang="scss">
.footer__ {
  &container {
    background-color: #E7E2E2FF;
    align-items: center;
    height: 80px;
    padding: 0.75rem;
    margin-top: 38px;
  }

  &socials {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}

.container-fluid {
  padding-right: 0.25rem;
}
</style>