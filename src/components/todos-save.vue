<template>
  <div>
    <v-btn
      :loading="isSaving"
      @click="save"
      color="info"
    >
      Save
      <template>
        <v-progress-circular
          indeterminate
          color="primary"
          size="sm"
        ></v-progress-circular>
      </template>
    </v-btn>
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
