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
                <p class="px-5 py-5 light-blue--text text--lighten-5">
                Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar.
                </p>
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