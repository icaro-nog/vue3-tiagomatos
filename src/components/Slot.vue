<script setup>
    import { onMounted, useSlots } from 'vue';

    const slots = useSlots()

    onMounted(() => {
        console.log(slots.title)
    })
</script>

<template>
    <header class="header">
        <h1 v-if="slots.title" class="title">
            <slot name="title"></slot>
        </h1>
        <slot name="description"></slot>
        <div class="content">
            <slot></slot>
        </div>
    </header>
</template>

<style>
    .header{
        background: red;
        color: white;
    }
</style>