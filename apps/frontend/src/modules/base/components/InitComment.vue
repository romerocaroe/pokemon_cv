<template>
    <v-row justify="center" class="my-20 mx-20">
        <v-col cols="12" md="6" sm="6">
            <show-comment ref="items" :items="items"/>
        </v-col>
        <v-col cols="12" md="4" sm="4">
            <add-comment @create="createComment"/>
        </v-col>
    </v-row>
</template>

<script>
import BaseProvider from '../providers/BaseProvider.js'
import ShowComment from './ShowComment.vue'
import AddComment from './AddComment.vue'

export default {
    name:"InitComment",
    components: {
        ShowComment,
        AddComment
    },
    data(){
        return {
            items: []
        }
    },
    methods: {
        fetchData(){
            BaseProvider.fetchComments()
                .then(res => {
                    this.items = res.data.fetchComment
                    console.log(this.items)
                })
                .catch(err => console.error(err))
        },
        createComment(username,description){
            BaseProvider.createComment(username,description)
                .then(res => {
                    let id = res.data.createComment
                    this.items.push({id: id, username: username, description: description})
                })
                .catch(err => console.error(err))
        }
    },
    mounted(){
        this.fetchData()
    }
}
</script>

<style>

</style>