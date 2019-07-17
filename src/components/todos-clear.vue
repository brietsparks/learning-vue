<template>
  <v-btn @click="clear" v-if="!isEmpty" color="error">Clear</v-btn>
</template>

<script>
  import { actionTypes as actions } from '../store/todos';

  export default {
    name: 'todos-clear',
    methods: {
      clear() {
        this.$store.dispatch(actions.CLEAR_TODOS)
      }
    },
  }
</script>

<style scoped>

</style>
