<template>
    <v-row>
        <v-col cols="12">
            <h2 class="px-5 pt-5 font-weight-light light-blue--text text--lighten-4">
                Características
            </h2>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-bond light-blue--text text--lighten-4">Tipo:</p>
            <v-chip outlined color="mx-1 light-blue lighten-4">
                <v-icon color="light-blue lighten-4" left>mdi-water</v-icon>
                <h4 class="light-blue--text text--lighten-5">{{types[0]}}</h4>
            </v-chip>
            <v-chip outlined color="mx-1 light-blue lighten-4">
                <v-icon color="light-blue lighten-4" left>mdi-snowflake</v-icon>
                <h4 class="light-blue--text text--lighten-5">{{types[1]}}</h4>
            </v-chip>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-bond light-blue--text text--lighten-4">Características:</p>
            <v-chip outlined color="mx-1 light-blue lighten-4">
                <h4 class="light-blue--text text--lighten-5">
                Altura: {{this.height}} m
                </h4>
            </v-chip>
            <v-chip outlined color="mx-1 light-blue lighten-4">
                <h4 class="light-blue--text text--lighten-5">
                Peso: {{this.weight}} kg
                </h4>
            </v-chip>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-bond light-blue--text text--lighten-4">Habilidades:</p>
            <v-chip v-for="(ability,index) in abilitiesList" :key="index" outlined color="mx-1 light-blue lighten-4">
                <h4 class="light-blue--text text--lighten-5">
                {{ability}}
                </h4>
            </v-chip>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-bond light-blue--text text--lighten-4">Habilidades ocultas:</p>
            <v-chip v-for="(ability,index) in hiddenAbilitiesList" :key="index" outlined color="mx-1 light-blue lighten-4">
                <h4 class="light-blue--text text--lighten-5">
                {{ability}}
                </h4>
            </v-chip>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "PokemonData",
    props: {
        weight: Number,
        height: Number,
        abilities: Array,
        types: Array
    },
    data(){
        return {
            abilitiesList: [],
            hiddenAbilitiesList: []
        }
    },
    mounted(){
        this.abilitiesOrder()
    },
    methods: {
        abilitiesOrder(){
            for (let i = 0; i < this.abilities.length; i++) {
                !this.abilities[i].is_hidden ? this.abilitiesList.push(this.abilities[i].name) : this.hiddenAbilitiesList.push(this.abilities[i].name)
            }
        }
    }
}
</script>

<style>
.v-label.theme--light{ color: white !important; }
</style>