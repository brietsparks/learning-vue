<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <a
        id="logo"
        href="https://github.com/brietsparks/learning-vue"
        target="_blank"
      >TODOS</a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="mr-2">
        <todos-save/>
      </span>
    <span class="mr-2">
        <todos-clear/>
      </span>
  </v-toolbar>
</template>

<script>
  import TodosSave from './todos-save';
  import TodosClear from './todos-clear';

  export default {
    name: 'header',
    components: {
      TodosSave,
      TodosClear
    }
  }
</script>

<style scoped>
  #logo {
    color: #555;
    text-decoration: none;
  }

  #logo:hover {
    color: #000;
  }
</style>
