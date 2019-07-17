<template>
  <div>
    <v-text-field
      label="Title"
      v-model="title"
      ref="title"
      @keypress="handleEnter"
    >
      <template slot="append">
        <v-icon @click="add" color="info">add</v-icon>
      </template>
    </v-text-field>
<!--    <v-btn @click="add" color="info">Add</v-btn>-->
  </div>
</template>

<script>
  import { actionTypes as actions } from '../store/todos';
  import { randomString } from '../util';

  export default {
    name: 'todo-new-item',
    data: function() {
      return {
        title: ''
      }
    },
    methods: {
      add: function() {
        this.$store.dispatch(actions.ADD_TODO, {
          id: randomString(),
          title: this.title
        });

        Object.assign(this.$data, this.$options.data());

        this.$refs.title.focus();
      },
      handleEnter: function (e) {
        if (e.key === 'Enter') {
          this.add();
        }
      }
    }
  }
</script>

<style scoped>

</style>
