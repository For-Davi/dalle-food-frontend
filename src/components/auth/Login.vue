<script setup lang="ts">
import { reactive } from 'vue';
import { AuthRender } from '../../ts/interfaces/auth';

defineOptions({
    name: 'Login',
});

const emit = defineEmits<{
    'update:changeRender': [AuthRender];
}>();

const dataLogin = reactive({
    email: '' as string,
    password: '' as string,
});
</script>

<template>
    <v-card class="form-auth mt-4 bg-grey-darken-4 pa-6" variant="text">
        <v-img height="250px" src="src/assets/logos/1.png"></v-img>
        <v-card-title class="mb-2">Entre com seu e-mail</v-card-title>
        <v-form class="px-4">
            <v-text-field
                v-model="dataLogin.email"
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
                v-model="dataLogin.password"
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
        </v-form>
        <v-card-actions class="d-flex flex-column justify-center px-4">
            <v-btn class="w-100 bg-deep-orange" ripple color="deep-orange">
                <span class="text-white mr-2">Entrar</span>
                <v-icon color="white" icon="mdi-login"></v-icon>
            </v-btn>
            <v-btn
                @click="emit('update:changeRender', 'reset')"
                class="w-100"
                ripple
                variant="text"
                color="deep-orange"
            >
                <span class="text-white mr-2">Esqueci minha senha</span>
                <v-icon color="white" icon="mdi-lock-reset"></v-icon>
            </v-btn>
            <v-btn
                @click="emit('update:changeRender', 'register')"
                class="w-100"
                ripple
                variant="text"
                color="deep-orange"
            >
                <span class="text-white mr-2">Criar uma conta</span>
                <v-icon color="white" icon="mdi-account-plus"></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
