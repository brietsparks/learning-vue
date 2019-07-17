<template>
    <div>
        <p>Id: {{ id }}</p>
        <p>Title: {{ todo.title }}</p>
    </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      id: String
    },
    computed: {
      todo() {
        return this.$store.getters.todo(this.id)
      }
    }
  }
</script>

<style scoped>

</style>
