<script setup>
    import AppProduct from './AppProduct.vue';
    import { useStore } from 'vuex';

    const store = useStore();
</script>

<template>
    <div>
        <AppProduct
            v-for="product in store.state.products"
            :key="product.id"
            :product="product"
        ></AppProduct>
    </div>
</template>