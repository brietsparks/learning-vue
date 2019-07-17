<template>
  <div>
    <input
      v-model="title"
      ref="title"
      @keypress="handleEnter"
    />
    <button @click="add">Add</button>
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
