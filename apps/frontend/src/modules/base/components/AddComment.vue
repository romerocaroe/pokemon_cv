<template>
    <div>
        <h3 class="py-5 font-weight-light">AGREGAR COMENTARIO</h3>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="username"
            :counter="20"
            :rules="usernameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="description"
            :rules="descriptionRules"
            label="Comentario"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="create"
            >
            CREATE
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            valid: true,
            username: '',
            usernameRules: [
                v => !!v || 'El nombre es requerido!',
                v => (v && v.length <= 10) || 'El nombre debe tener menos de 20 caracteres!',
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'El comentario es requerido!',
            ]
        }
    },
    methods: {
        create() {
            if(this.$refs.form.validate()){
                this.$emit('create', this.username, this.description)
            }
        },
    },
}
</script>

<style>

</style>