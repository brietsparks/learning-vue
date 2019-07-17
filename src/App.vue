<template>
  <v-app>
    <app-header/>

    <v-content>
      <todos-list/>
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from './components/app-header';
  import TodosList from './components/todos-list';

  export default {
    name: 'App',
    components: {
      AppHeader,
      TodosList
    }
  }
</script>
