<template>
    <div id="learnbox">
        <div>11111</div>
        
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: 'learnForm',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
#learnbox{
    background-color: #f00;
}
</style>