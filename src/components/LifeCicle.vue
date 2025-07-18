<script setup>
    import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
    import TheHeader from './TheHeader.vue';

    const name = ref('Jon');
    // Acessar DOM com Composition API
    const myElement = ref(null)
    const showHeader = ref(true)

    // console.log('created')
    // console.log('Estado')
    // console.log(name.value)
    // console.log('DOM:')
    // console.log(myElement.value)

    // Hooks
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })
    onUpdated(() => {
        console.log('onUpdated')
    })
    // onBeforeMount(() => {
    //     console.log('onBeforeMount')
    //     console.log('Estado')
    //     console.log(name.value)
    //     console.log('DOM:')
    //     console.log(myElement.value)
    // })

    // onMounted(() => {
    //     console.log('onMounted')
    //     console.log('Estado')
    //     console.log(name.value)
    //     console.log('DOM:')
    //     console.log(myElement.value)
    // })

</script>

<template>
    <div ref="myElement">
        <TheHeader
            v-if="showHeader"
        ></TheHeader>
        <h1>Hello World</h1>
        <br>
        <input 
            v-model="name"
            type="text"
        >
        {{ name }}
        <br><br>
        <button @click="showHeader = !showHeader">
            <span v-if="showHeader">Desativar header</span>
            <span v-else>Ativar header</span>
        </button>
    </div>
</template>

<style>

</style>