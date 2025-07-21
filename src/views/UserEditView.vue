<script setup>
    import { useRouter, useRoute } from 'vue-router';

    const router = useRouter()
    const route = useRoute()

    function login(){
        console.log('chegou')
        // ajax e direcionar pra about
        router.push('/about')
    }

    console.log(route)
</script>

<template>
    <div>
        <pre>
            {{ route }}
        </pre>
        Usuário <br>

        <button @click="login">
            Login
        </button>
    </div>
</template>