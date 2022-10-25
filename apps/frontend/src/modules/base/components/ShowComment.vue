<template>
    <v-card
        max-width="600"
        class="mx-auto mx-10"
    >
        <v-list class="py-5 px-5 " three-line>
            <h3 class="font-weight-light">COMENTARIOS</h3>
            <h4 v-if="items.length == 0" class="pt-2 font-weight-light">No hay comentarios!</h4>
            <template v-else v-for="(item) in items">
                <v-subheader
                class="font-weight-light light-blue--text text--darken-5"
                v-if="!item"
                :key="item.id"
                >No hay comentarios</v-subheader>

                <v-list-item
                v-else
                :key="item.title"
                >
                <v-list-item-avatar color="indigo">
                    <v-icon dark>
                        mdi-account-circle
                    </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-html="item.username"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "ShowComment",
    props: {
        items: Array
    }
}
</script>

<style>

</style>