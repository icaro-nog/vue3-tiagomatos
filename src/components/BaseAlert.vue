<script setup>
    import { defineProps, computed, onMounted, defineEmits } from 'vue';

    const props = defineProps({
        variant: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        test: {
            type: String,
            default: 'test'
        }
    })

    const emit = defineEmits(['close'])

    const baseClass = computed(() => {
        return [
            'alert',
            props.variant ? `alert-${props.variant}` : ''
        ]
    })
    
    const onClick = () => {
        console.log('clickou')
        emit('close')
    }

    // onMounted(() => {
    //     console.log(props.test)
    // })
</script>

<template>
    <div v-bind:class="baseClass">
        <slot></slot>

        <button @click="onClick">
            X
        </button>
    </div>
</template>

<style scoped>
    .alert{
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background: #ddd;
        display: flex;
        justify-content: space-between;
    }

    .alert-success{
        background: #42b983;
        color: #fff;
    }

    .alert-danger{
        background: red;
        color: #fff;
    }
</style>