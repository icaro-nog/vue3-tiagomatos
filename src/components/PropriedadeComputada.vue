<script setup>
    import { onMounted, ref, computed } from 'vue';

    const user = ref({
        first_name: 'Jon',
        last_name: 'Snow',
    })

    const todos = ref([
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "imgSrc": 'https://placehold.co/150x150'
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false,
            "imgSrc": 'https://placehold.co/150x150'
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        }
    ])

    function click(){
        console.log(this)
    }

    const fullName = computed(() => {
        return `${user.value.first_name} ${user.value.last_name}`
    })

    const uncompletedTodos = computed(() => {
        return todos.value.filter(todo => !todo.completed)
    })

    const completedTodos = computed(() => {
        return todos.value.filter(todo => todo.completed)
    })

</script>

<template>
    <div>
        <button @click="click">Click</button>
        <br><br>
        {{ user.first_name }} {{ user.last_name }}
        <br><br>
        {{ fullName }}
        <br><br>

        <h2>Todos em aberto</h2>
        <div
            v-for="todo in uncompletedTodos"
            :key="todo.id"
        >
            {{ todo.title }} <span style="color:red">{{ todo.completed }}</span>
        </div>
        <br><br>

        <h2>Todos completas</h2>
        <div
            v-for="todo in completedTodos"
            :key="todo.id"
        >
            {{ todo.title }} <span style="color:green">{{ todo.completed }}</span>
        </div>
        <br><br>

        <h2>Todos em checkbox</h2>
        <div
            v-for="todo in todos"
            :key="todo.id"
        >
            <input 
                type="checkbox"
                v-model="todo.completed"
            >
            {{ todo.title }}
        </div>
    </div>
</template>

<style>

</style>