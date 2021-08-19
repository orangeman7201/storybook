<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th align="center">タスク</th>
          <th>状態</th>
        </tr>
      </thead>

      <thead>
        <tr v-for="todo in filteredTodos" :key="todo.index">
          <td>{{todo.id}}</td>
          <td id="display">{{todo.task}}</td>
          <td>
            <button id="button" v-if="todo.state === 'working'" @click="changeState(todo.id)">作業中</button>
            <button v-else @click="changeState(todo.id)">完了</button>
          </td>
          <td><button @click="deleteTask(todo.id)">削除</button></td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['filteredTodos'],
    methods: {
      changeState(index) {
        this.$emit("sendTaskState", index);
      },
      deleteTask(index) {
        this.$emit("sendDeleteTask", index);
      }
    }

  }
</script>