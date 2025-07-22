<!-- <script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import TheHeader from './components/TheHeader.vue'
  import TheBidirecional from './components/TheBidirecional.vue'
  import Eventos from './components/Eventos.vue'
  import PropriedadeComputada from './components/PropriedadeComputada.vue'
  import ObservadorWatch from './components/ObservadorWatch.vue'
  import LifeCicle from './components/LifeCicle.vue'
  import Slot from './components/Slot.vue'
  import BaseCard from './components/BaseCard.vue'
  import BaseAlert from './components/BaseAlert.vue'
  import { ref } from 'vue'

  const showHeader = ref(true);
  const firstName = ref('Jon'); 
  const lastName = ref('Snow'); 
  const showName = ref(false); 
  const accessLevel = ref('marketing'); 
  
  const variant = ref('success');
  const text = ref('Seu formulário foi enviado');
  const showAlert = ref(true)

  const onClose = () => {
    // ref usar: nomeDaConstante.value pra definir novo valor
    showAlert.value = false
    console.log('onClose')
    console.log(showAlert.value)
  }

</script> -->

<!-- <template> -->
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

  <!-- <main> -->
    <!-- <TheBidirecional /> -->
    <!-- <Eventos /> -->
    <!-- <PropriedadeComputada></PropriedadeComputada> -->
    <!-- <ObservadorWatch></ObservadorWatch> -->
    <!-- <LifeCicle></LifeCicle> -->
    <!-- <Slot>
      <template v-slot:title>
        Home
      </template>
      <template v-slot:description>
        <p>asdasd</p>
      </template>
      content do slot
    </Slot> -->
    <!-- <div class="card">
      teste
    </div>
    <BaseCard></BaseCard> -->

    <!-- <PAI> -> props do pai para o filho
      <FILHO>
        <NETO></NETO> -> emit do filho pro pai 
      </FILHO>
    </PAI> -->

    <!-- <BaseAlert
      v-if="showAlert"
      :variant="variant"
      @close="onClose"
    >
      {{ text }}
    </BaseAlert> -->
  <!-- </main>
</template> -->

<!-- <style scoped>
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
</style> -->
<script setup>
  import { useStore } from 'vuex';

  const store = useStore()

  console.log(store.state.user)
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/servicos">Serviços</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/usuarios/10">Usuario</router-link> 
  </nav>
  <router-view></router-view>
</template>

<style>
/* Basic styling */
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
