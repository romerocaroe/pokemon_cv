<template>
  <v-row v-if="fetched" justify="center" class="mx-10 my-10">
    <v-col align="center" cols="12" sm="12">
      <v-card lass="mx-auto pt-50" color="light-blue darken-1">
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
    <v-divider class="my-10"></v-divider>
    <v-col cols="12">
      <v-card lass="mx-auto" color="light-blue darken-1">
        <pokemon-stats :stats="pokemonData.stats" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BaseProvider from '../providers/PokemonProvider.js'
import PokemonMain from './PokemonMain.vue'
import PokemonStats from './PokemonStats.vue'

export default {
  name: 'PokemonInit',
  components: {
    PokemonMain,
    PokemonStats,
  },
  data(){
    return {
      pokemonData: [],
      fetched: false
    }
  },
  mounted(){
    this.created()
  },
  methods: {
    created(){
      BaseProvider.initPokemonCV()
      .then(res => {
          console.log(res)
          this.pokemonData = res.data.initPokemonCV
          this.fetched = true
          console.log(this.pokemonData)
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
</style>
