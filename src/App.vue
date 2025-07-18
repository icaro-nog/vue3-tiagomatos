<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import TheHeader from './components/TheHeader.vue'
  import TheBidirecional from './components/TheBidirecional.vue'
  import Eventos from './components/Eventos.vue'
  import PropriedadeComputada from './components/PropriedadeComputada.vue'
  import ObservadorWatch from './components/ObservadorWatch.vue'
  import LifeCicle from './components/LifeCicle.vue'
  import { ref } from 'vue'

  const showHeader = ref(true);
  const firstName = ref('Jon'); 
  const lastName = ref('Snow'); 
  const showName = ref(false); 
  const accessLevel = ref('marketing'); 

</script>

<template>
  <!-- <TheHeader
    v-if="showHeader"
  ></TheHeader>

  <div v-show="showName">
    Nome: {{ firstName }}
    <br>
    Sobrenome: {{ lastName }}
  </div>

  <div v-if="accessLevel === 'admin'">User Admin</div>
  <div v-else-if="accessLevel === 'marketing'">User Marketing</div>
  <div v-else>User normal</div>
  
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

  <main>
    <!-- <TheBidirecional /> -->
    <!-- <Eventos /> -->
    <!-- <PropriedadeComputada></PropriedadeComputada> -->
    <!-- <ObservadorWatch></ObservadorWatch> -->
    <LifeCicle></LifeCicle>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
