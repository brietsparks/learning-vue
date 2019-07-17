<template>
  <div>
    <button @click="save">Save</button>
    <div v-if="isSaving">...saving</div>
  </div>
</template>

<script>
  import { actionTypes as actions } from '../store/todos';

  export default {
    name: 'todos-save',
    methods: {
      save: function () {
        this.$store.dispatch(actions.SAVE_TODOS);
      }
    },
    computed: {
      isSaving: function() {
        return this.$store.getters.isSavingTodos;
      }
    }
  }
</script>

<style scoped>

</style>
