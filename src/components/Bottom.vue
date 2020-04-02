<template>
  <nav>
    <v-bottom-navigation class="mt-2">
      <v-btn value="recent" :to="{name : 'Home'}">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites" :to="{name : 'About'}">
        <span>About</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>
</template>

<script>
export default {
  name: "Bottom"
};
</script>


