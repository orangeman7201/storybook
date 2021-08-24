<template>
  <form>
    <input type="radio" id="all" value="all" v-model="radioState"><rabel for="all">全て</rabel>
    <input type="radio" id="working" value="working" v-model="radioState"><rabel for="working">作業中</rabel>
    <input type="radio" id="finish" value="finish" v-model="radioState"><rabel for="finish">完了</rabel>
  </form>
</template>

<script>
  export default {
      data: function() {
        return {
          radioState: 'all',
        }
      },
      watch: {
        radioState: function() {
          this.$emit('sendRadioState', this.radioState);
        }
      }
  }
</script>