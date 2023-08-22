<template>
  <HelloWorld />
  <LoginPage />
</template>

<script>

import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'
import LoginPage from '@/views/logIn/LoginPage.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    LoginPage
  }
});
</script>
