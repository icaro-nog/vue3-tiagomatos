<script setup>
    import { onMounted, ref } from 'vue';
    
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
    ]);

    const imgAlt = ref('Imagem de Jon Snow')
    const imgSrc = ref('https://placehold.co/150x150')

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
            <img 
                v-show="obj.imgSrc"
                v-bind:src="obj.imgSrc"
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