<template>
    <div>
        <v-row justify="center" align="center">
                <v-col cols="12">
                    <v-chip class="mt-5 py-5" color="light-blue lighten-5">
                        <h1 class="px-5 font-weight-light light-blue--text text--darken-5">
                            {{this.name.toUpperCase()}} - N°{{this.id.toUpperCase()}}
                        </h1>
                    </v-chip>
                </v-col>
                <v-col cols="12">
                    <v-avatar
                    justify="center" align="center"
                        size="220"
                        color="white"
                        class="px-5 my-5">
                        <v-img
                        max-height="200"
                        max-width="200"
                        class="ml-auto"
                        :src="this.pic"
                        ></v-img>
                    </v-avatar>
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
        <v-row >
        </v-row>
    </div>
</template>

<script>
export default {
    name: "PokemonMain",
    props: {
        name: String,
        id: String,
        pic: String,
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

</style>