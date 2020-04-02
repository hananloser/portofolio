<template>
  <v-lazy v-model="isActive" :options="options" min-height="200" transition="slide-x-transition">
    <v-parallax
      src="https://www.wallpaperup.com/uploads/wallpapers/2016/03/01/903030/87786ac645ba2a2169a69f4d4553c024-700.jpg"
    >
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-avatar color="orange" size="100">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <h3>Hanan Asyrawi</h3>
        </v-col>
      </v-row>
    </v-parallax>
  </v-lazy>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    isActive: false,
    options: {
      threshold: 0.6
    }
  })
};
</script>

<style scoped>
</style>

