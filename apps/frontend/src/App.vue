<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue darken-3"
      dense
      dark
    >
      <v-avatar class="px-4" dense>
        <img
          src="./media/pokemon_icon.png"
          alt="John"
        >
      </v-avatar>
      <v-toolbar-title>Pokemon CV</v-toolbar-title> -->
    </v-app-bar>

    <v-main>
      <v-row justify="center">
        <v-col class="animate__animated animate__bounceInDown" cols="10" md="6">
          <PokemonInit/>
        </v-col>
        <v-col class="animate__animated animate__bounceInRight" cols="10" md="4">
          <OpinionsSector/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import 'animate.css';
import PokemonInit from './modules/pokemoncv/components/PokemonInit.vue';
import OpinionsSector from './modules/base/components/OpinionsSector.vue'

export default {
  name: 'App',
  components: {
    PokemonInit,
    OpinionsSector
  }
};
</script>
