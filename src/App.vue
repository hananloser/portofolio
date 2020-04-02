<template>
  <v-app class="dark" dark>
    <Navbar />
    <v-content class="dark" dark>
      <router-view />
    </v-content>
    <Bottom />
  </v-app>
</template>

<script>
import Home from "@/views/Home";
import Navbar from "@/components/Navbar";
import Bottom from "@/components/Bottom.vue";

export default {
  // App Is Root Folder
  name: "App",

  components: {
    Home,
    Navbar,
    Bottom
  },

  data: () => ({
    //
  }),

  computed: {
    isLoading() {
      this.$store.state.isLoading;
    }
  }
};
</script>
