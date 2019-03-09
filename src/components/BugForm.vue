<template>
  <div class='col-12'>
    <form @submit.prevent='createBug'>
      <input v-model='bugForm.title' type='string' name='title' placeholder='Title' required>
      <input v-model='bugForm.creator' type='string' name='creator' placeholder='User' required>
      <input v-model='bugForm.description' type='string' name='description' placeholder='Description' required>
      <button type="submit">Submit Bug</button>
    </form>


  </div>
</template>



<script>
  export default {
    name: 'bugform',
    data() {
      return {
        bugForm: {}
      }
    },
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.bugForm)
      }
    }
  }

</script>