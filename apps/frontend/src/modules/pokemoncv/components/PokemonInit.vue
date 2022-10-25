<template>
  <v-row v-if="fetched" justify="center" class="mx-10 my-10">
    <v-carousel 
      align="center"
      :continuous="true"
      :cycle="true"
      :show-arrows="true"
      delimiter-icon="mdi-minus"
      dark>

      <v-carousel-item align="center">
        <v-col align="center" cols="12" md="4">
          <v-card lass="mx-auto" color="light-blue darken-1">
            <pokemon-main 
              :name="pokemonData.name"
              :id="pokemonData.id"
              :pic="pokemonData.pic"
              :weight="pokemonData.weight"
              :height="pokemonData.height"
              :abilities="pokemonData.abilities"
              :types="pokemonData.types"
            />
          </v-card>
        </v-col>
      </v-carousel-item>

      <v-carousel-item>
        <v-col align="center" cols="12" md="4">
          <v-card class="mx-auto" color="light-blue darken-1">
            <pokemon-characteristics
              :weight="pokemonData.weight"
              :height="pokemonData.height"
              :abilities="pokemonData.abilities"
              :types="pokemonData.types"
            />
          </v-card>
        </v-col>
      </v-carousel-item>


      <v-carousel-item>
        <v-col align="center" cols="12" md="4">
          <v-card class="mx-auto" color="light-blue darken-1">
            <pokemon-stats :stats="pokemonData.stats" />
          </v-card>
        </v-col>
      </v-carousel-item>
    </v-carousel>
    
  </v-row>
</template>

<script>
import PokemonProvider from '../providers/PokemonProvider.js'
import PokemonMain from './PokemonMain.vue'
import PokemonCharacteristics from './PokemonCharacteristics.vue'
import PokemonStats from './PokemonStats.vue'

export default {
  name: 'PokemonInit',
  components: {
    PokemonMain,
    PokemonStats,
    PokemonCharacteristics
  },
  data(){
    return {
      pokemonData: [],
      fetched: false,
      pages: [
        'PokemonMain',
        'PokemonStats',
        'PokemonCharacteristics'
      ],
    }
  },
  mounted(){
    this.created()
  },
  methods: {
    created(){
      PokemonProvider.initPokemonCV()
      .then(res => {
          this.pokemonData = res.data.initPokemonCV
          this.fetched = true
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
</style>
