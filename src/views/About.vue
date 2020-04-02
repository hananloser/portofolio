<template>
  <div class="about">
    <div class="container--fluid">
      <v-parallax
        src="https://www.wallpaperup.com/uploads/wallpapers/2016/03/01/903030/87786ac645ba2a2169a69f4d4553c024-700.jpg"
      >
        <v-row align="center" justify="center">
          <v-avatar color="orange" size="150">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-row>
      </v-parallax>
      <v-row align="center" justify="center" class="mt-3">
        <h1 class="display-1 text-center">About Me</h1>
      </v-row>
      <v-container>
        <v-flex>
          <v-row class="mx-1">
            <v-col cols="12" xs="12" sm="4" md="4" v-for="n in 6" :key="n">
              <v-card>
                <v-card-title>Post</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eius eaque assumenda voluptatum quod, possimus beatae tempora
                  dolore! Quis reprehenderit quos voluptatem similique enim, minima
                  culpa, voluptates explicabo quia est ipsam.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
        <br />
        <v-row align="start" justify="center" class="my-3">
          <h1 class="display-1 text-center">Biodata</h1>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      years: [
        {
          color: "cyan",
          year: "1960"
        },
        {
          color: "green",
          year: "1970"
        },
        {
          color: "pink",
          year: "1980"
        }
      ]
    };
  }
};
</script>
