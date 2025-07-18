<script setup>
    function onClick($evt){
        console.log('click', $evt)
    }

    function onMouseover($evt){
        console.log('mouse over', $evt)
    }

    function onMouseout($evt){
        console.log('mouse out', $evt)
    }

    function onSubmit($evt){
        console.log('submit', $evt)
    }

    function onKeyup($evt){
        console.log('keyup', $evt)
    }
</script>

<template>
    <div>
        <button @click.once="onClick">
            Enviar
        </button>
        <br>
        <div 
            @mouseover="onMouseover"
            @mouseout="onMouseout"
        >
            Mouse over
        </div>

        <br><br>

        <form 
            action="https://google.com"
            @submit.prevent="onSubmit"
        >
            <input 
                type="text"
                @keyup="onKeyup"
            >
            <button type="submit">
                Enviar
            </button>
        </form>

    </div>
</template>

<style>

</style>