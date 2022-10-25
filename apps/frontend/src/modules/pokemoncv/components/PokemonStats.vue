<template>
    <div class="mx-10">
        <h2 class="px-5 py-5 font-weight-light light-blue--text text--lighten-4">
            Estadísticas de base
        </h2>
        <v-slider
            v-for="(stat,index) in this.stats" :key="index"
            v-model="stat.base_stat"
            color="indigo lighten-2"
            :label="stat.name"
            :thumb-size="24"
            thumb-label="always"
            max="250"
            min="1"
            readonly
        ></v-slider>
    </div>
</template>

<script>
export default {
    name: "PokemonStats",
    props: {
        stats: Array
    }
}
</script>

<style>
.v-label.theme--light{ color: white !important; }
</style>