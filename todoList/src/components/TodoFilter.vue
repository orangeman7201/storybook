<template>
  <div>
    <input type="radio" id="all" value="all" v-model="radioState">全て
    <input type="radio" id="working" value="working" v-model="radioState">作業中
    <input type="radio" id="finish" value="finish" v-model="radioState">完了
  </div>
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