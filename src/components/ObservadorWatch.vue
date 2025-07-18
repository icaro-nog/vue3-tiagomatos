<script setup>
    import { reactive, ref, watch } from 'vue';

    const name = ref('');
    const pageCount = ref(5)
    const user = reactive({
        first_name: 'Ícaro',
        last_name: 'Nogueira',
    })

    watch(name, (newValue, oldValue) => {

        if(newValue.length >= 3){
            console.log('Ajax')
            console.log(newValue, oldValue)
        }

    })

    watch(pageCount, () => {
        console.log('change page ajax')
    })

    // usar reactive() para alterar objetos profundamente -> ref() não funciona
    watch(user, (newValue, oldValue) => {
        console.log('user alterado')
    })

</script>

<template>
    <div>
        <input 
            type="text"
            v-model="name"
        >
        <br>
        {{ name }}

        <br><br>

        <input 
            type="text"
            v-model="user.first_name"
        >
        <br>
        <input 
            type="text"
            v-model="user.last_name"
        >
        <br>
        {{ user.first_name }} {{ user.last_name }}

        <br><br>

        <select v-model="pageCount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br>
        {{ pageCount }}

    </div>
</template>

<style>

</style>