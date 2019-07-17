<template>
  <div>
    <template v-if="error">
      <div>Oops, an error occurred!</div>
    </template>

    <template v-if="isFetching">
      <div>Loading...</div>
    </template>
    <template v-else>
      <todo-new-item/>

      <todos-save />

      <div v-for="id in ids">
        <todo-item :id="id" :key="id"></todo-item>
      </div>

      <button @click="clear" v-if="!isEmpty">Remove All</button>
    </template>
  </div>
</template>

<script>
  import TodoItem from './todo-item';
  import TodoNewItem from './todo-new-item';
  import TodosSave from './todos-save';
  import { actionTypes as actions } from '../store/todos';

  export default {
    name: 'todos-list',
    components: {
      TodoNewItem,
      TodoItem,
      TodosSave
    },
    methods: {
      clear() {
        this.$store.dispatch(actions.CLEAR_TODOS)
      }
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
      },
      isEmpty() {
        return this.ids.length < 1;
      },
    },
    created: function() {
      this.$store.dispatch(actions.FETCH_TODOS);
    }
  }
</script>

<style scoped>

</style>
