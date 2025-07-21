<script setup>
    import { defineProps, computed, onMounted } from 'vue';

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
            default: ''
        }
    })

    const baseClass = computed(() => {
        return [
            'alert',
            props.variant ? `alert-${props.variant}` : ''
        ]
    })

    onMounted(
        console.log(props.test)
    )
</script>

<template>
    <div v-bind:class="baseClass">
        <slot></slot>
    </div>
</template>

<style scoped>
    .alert{
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background: #ddd;
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