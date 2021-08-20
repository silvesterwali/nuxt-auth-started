<template>
  <v-app dark>
    <v-app-bar fixed tile dense elevate-on-scroll app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        color="black darken-1"
        text
        dark
        :exact="true"
        x-large
        tile
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        dark
        text
        tile
        x-large
        class="mr-n5"
        color="black darken-1"
        :exact="true"
        to="/register"
      >
        Register
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nuxt Auth Started',
    }
  },
}
</script>
