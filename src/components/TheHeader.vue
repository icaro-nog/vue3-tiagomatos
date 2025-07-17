<script setup>
    import { onMounted, ref } from 'vue';
    
    const todos = ref([
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
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
    ]);

    onMounted(() => {
        console.log(todos.value[0].title)
    })

</script>

<template>
    <div>
        <div 
            v-for="(obj, index) in todos"
            v-bind:key="obj.id"
            class="todos-item"
        >
            {{ index + ' - ' + obj.title }}
        </div>
    </div>
</template>

<style>
    .header{
        background: red;
        color: azure
    }

    .todos-item{
        margin: 0 0 5px 0;
        padding: 3px;
        color: black;
        background: greenyellow;
    }
</style>