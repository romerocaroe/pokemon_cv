<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue darken-3"
      dense
      dark
    >
      <v-toolbar-title class="light-blue--text text--lighten-5">Pokemon CV</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-row>
        <v-col class="animate__animated animate__bounceInDown" cols="12">
          <PokemonInit/>
        </v-col>
        <v-col class="animate__animated animate__bounceInDown" cols="12">
          <InitComment/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import 'animate.css';
import PokemonInit from './modules/pokemoncv/components/PokemonInit.vue';
import InitComment from './modules/base/components/InitComment.vue'

export default {
  name: 'App',
  components: {
    PokemonInit,
    InitComment
  }
};
</script>
