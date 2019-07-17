<template>
  <div>
    <v-text-field
      :value="todo.title"
      @change="editTitle"
      placeholder="Title"
    >
      <template slot="append">
        <v-icon @click="remove">clear</v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script>
  import { actionTypes as actions } from '../store/todos';

  export default {
    name: 'todo-item',
    props: {
      id: String
    },
    computed: {
      todo() {
        return this.$store.getters.todo(this.id)
      }
    },
    methods: {
      editTitle: function(e) {
        this.$store.dispatch(actions.CHANGE_TODO, {
          id: this.id,
          title: e.target.value
        });
      },
      remove: function() {
        this.$store.dispatch(actions.REMOVE_TODO, this.id)
      }
    }
  }
</script>

<style scoped>

</style>
