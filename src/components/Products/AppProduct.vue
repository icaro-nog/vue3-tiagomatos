<script setup>
    import { defineProps, ref } from 'vue';
    import { useStore } from 'vuex';

    const props = defineProps({
        product: {
            type: Object,
            default: {}
        }
    })

    const store = useStore()

    const productIsInCart = ref(false)

    function inCart(productId){
        productIsInCart.value = store.state.cart.findIndex(p => p.id === productId) != -1 ? true : false
        return productIsInCart.value;
    }

    function addProduct(newProduct){

        console.log('produto enviado para o Vuex', newProduct)
        store.commit('addProduct', newProduct)
    }

    function removeProduct(productIdRemove){

        console.log('produto enviado para o Vuex', productIdRemove)
        store.commit('removeProduct', productIdRemove)
    }

</script>

<template>
    <div class="card">
        {{ product.id }} - {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct(product)">
            Adicionar
        </button>
        <button 
            @click="removeProduct(product.id)"
            v-if="inCart(product.id)"
        >
            Remover
        </button>
    </div>
</template>

<style>
    .card{
        background: bisque;
        padding: 6px;
        color: brown;
        margin-bottom: 5px;
    }
</style>