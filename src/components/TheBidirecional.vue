<script setup>
    import { ref } from 'vue';

    const name = ref('Jon Snow'); 

    const sports = ref('');

    const newsletter = ref('')
    
    const contract = ref(false);

    const colors = ref([]);

</script>

<template>
    <div>
        <div>
            One-way data binding <br>
            Two-way data binding <br>
            v-model -> formulários
        </div>

        <br><br>

        <div>
            <label>Nome</label> <br>
            <input
                v-model="name" 
                type="text"
            >
            <br>
            {{ name }}
        </div>

        <br><br>

        <div>
            <select v-model="sports">
                <option value="">Escolha</option>
                <option value="futebol">Futebol</option>
                <option value="skate">Skate</option>
                <option value="tênis">tênis</option>
            </select>
            <br>
            {{ sports }}
        </div>

        <br><br>

        <div>
            <label> Newsletter </label>
            <br>
            <input 
                v-model="newsletter"
                type="radio"
                value="sim"
            >Sim

            <input 
                v-model="newsletter"
                type="radio"
                value="não"
            >Não
            <br>
            {{ newsletter }}
        </div>

        <br><br>

        <div>
            <label> Contrato </label>
            <br>
            <input 
                v-model="contract"
                type="checkbox"
                value="sim"
            >Aceita nossos termos
            <br>
            {{ contract }}
        </div>

        <br><br>

        <div>
            <label> Cores que você mais gosta </label>
            <br>
            <input 
                v-model="colors"
                type="checkbox"
                value="Azul"
            >Azul

            <input 
                v-model="colors"
                type="checkbox"
                value="Amarelo"
            >Amarelo
            <br>
            {{ colors }}
        </div>

    </div>
</template>

<style>

</style>