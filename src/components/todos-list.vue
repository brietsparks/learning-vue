<template>
  <v-container grid-list-lg>
    <template v-if="error">
      <div>Oops, an error occurred!</div>
    </template>

    <template v-if="isFetching">
      <div>Loading...</div>
    </template>
    <template v-else>
      <todo-new-item/>

      <div v-for="id in ids" :key="id">
        <todo-item :id="id"></todo-item>
      </div>
    </template>
  </v-container>
</template>

<script>
  import TodoItem from './todo-item';
  import TodoNewItem from './todo-new-item';
  import { actionTypes as actions } from '../store/todos';

  export default {
    name: 'todos-list',
    components: {
      TodoNewItem,
      TodoItem,
    },
    computed: {
      ids() {
        return this.$store.getters.todoIds;
      },
      isFetching() {
        return this.$store.getters.isFetchingTodos;
      },
      error() {
        return this.$store.getters.todosError;
      }
    },
    created: function() {
      this.$store.dispatch(actions.FETCH_TODOS);
    }
  }
</script>

<style scoped>

</style>
