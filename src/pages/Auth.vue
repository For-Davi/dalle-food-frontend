<script setup lang="ts">
import { reactive } from 'vue';

defineOptions({
    name: 'Auth',
});

const dataLogin = reactive({
    email: '' as string,
    password: '' as string,
});
</script>

<template>
    <main class="container-full d-flex justify-center align-center bg-grey-darken-4">
        <v-card class="form-auth" :loading="false" variant="tonal">
            <v-img height="200px" src="src/assets/logos/1.png"></v-img>
            <v-card-title> Login </v-card-title>
            <v-form>
                <v-text-field
                    v-model="dataLogin.email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    prepend-inner-icon="mdi-email"
                    required
                    autocomplete="new-email"
                    name="email"
                ></v-text-field>
                <v-text-field
                    v-model="dataLogin.password"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    prepend-inner-icon="mdi-send"
                    required
                    autocomplete="new-password-login"
                    name="password-login"
                ></v-text-field>
            </v-form>
            <v-card-actions>
                <v-btn>Click me</v-btn>
            </v-card-actions>
        </v-card>
    </main>
</template>
