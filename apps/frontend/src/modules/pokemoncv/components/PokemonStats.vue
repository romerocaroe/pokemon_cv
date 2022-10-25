<template>
    <div class="mx-10 my-10">
        <v-row>
            <v-col align="center" cols="12">
                <h2 class="px-5 font-weight-light light-blue--text text--lighten-4">
                    Estadísticas de base
                </h2>
            </v-col>
            <v-col cols="12" class="font-weight-light light-blue--text text--lighten-4">
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
            </v-col>
        </v-row>
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