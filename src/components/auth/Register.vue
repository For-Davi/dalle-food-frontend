<script setup lang="ts">
import { reactive } from 'vue';
import { AuthRender } from '../../ts/interfaces/auth';

defineOptions({
    name: 'Register',
});

const emit = defineEmits<{
    'update:changeRender': [AuthRender];
}>();

const dataRegister = reactive({
    nameUser: '' as string,
    email: '' as string,
    password: '' as string,
    confirmPassword: '' as string,
});
</script>

<template>
    <v-card class="form-auth mt-4 bg-grey-darken-4 pa-6" variant="text">
        <v-img height="250px" src="src/assets/logos/1.png"></v-img>
        <v-card-title class="mb-2">Crie sua conta</v-card-title>
        <v-form class="px-4">
            <v-text-field
                v-model="dataRegister.nameUser"
                label="Nome"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-email"
                required
                color="deep-orange"
            ></v-text-field>
            <v-text-field
                v-model="dataRegister.email"
                label="Email"
                type="email"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-email"
                required
                autocomplete="new-email"
                name="email"
                color="deep-orange"
            ></v-text-field>
            <v-text-field
                v-model="dataRegister.password"
                label="Senha"
                type="password"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-lock"
                required
                autocomplete="new-password"
                name="password-login"
                color="deep-orange"
            ></v-text-field>
            <v-text-field
                v-model="dataRegister.confirmPassword"
                label="Confirme sua senha"
                type="password"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-lock"
                required
                autocomplete="new-password"
                name="password-login"
                color="deep-orange"
            ></v-text-field>
        </v-form>
        <v-card-actions class="d-flex flex-column justify-center px-4">
            <v-btn class="w-100 bg-deep-orange" ripple color="deep-orange">
                <span class="text-white mr-2">Cadastrar</span>
                <v-icon color="white" icon="mdi-account-plus"></v-icon>
            </v-btn>
            <v-btn
                @click="emit('update:changeRender', 'login')"
                class="w-100"
                ripple
                variant="text"
                color="deep-orange"
            >
                <span class="text-white mr-2">Entrar</span>
                <v-icon color="white" icon="mdi-login"></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
