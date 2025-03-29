<script setup lang="ts">
import { ref } from 'vue';
import { AuthRender } from '../ts/interfaces/auth';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Reset from '../components/auth/Reset.vue';

defineOptions({
    name: 'Auth',
});

const render = ref<AuthRender>('login');

const updateRender = (data: AuthRender) => {
    render.value = data;
};
</script>

<template>
    <main class="container-full d-flex">
        <section class="w-100 h-100 bg-auth bg-grey-darken-4">
            <v-img cover src="src/assets/background/bg-auth.jpg"></v-img>
        </section>

        <section class="bg-form bg-grey-darken-4">
            <Login v-if="render === 'login'" @update:change-render="updateRender" />
            <Register v-else-if="render === 'register'" @update:change-render="updateRender" />
            <Reset v-else @update:change-render="updateRender" />
        </section>
    </main>
</template>
