<template>
  <div>
    <form id="input-form" @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
      <input type="submit" value="追加">
    </form>
  </div>
</template>

<script>
  export default {
      data: function() {
        return {
          newTodo: '',
        }
      },
      methods: {
        addTodo: function() {
          const Item = {id: '',task: this.newTodo, state: 'working'};
          this.$emit('sendItem', Item);
          this.newTodo = '';
        },
      }
  }
</script>
