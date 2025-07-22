<script setup>
    import { useStore } from 'vuex';

    const storeServices = useStore()

    // console.log(storeServices.state.user)
</script>

<template>
    <div>
        serviços
        <br>
        <!-- {{ storeServices.state.user.first_name }} 
        {{ storeServices.state.user.last_name }} <br>
        {{ storeServices.state.user.email }} -->
    </div>
</template>