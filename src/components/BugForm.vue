<template>
  <div class='col-6'>
    <form @submit.prevent='createBug' class='b-form'>
      <div class="row">
        <div class="col-12">
          <input class="bf-display" v-model='bugForm.title' type='string' name='title' placeholder='Title...' required>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <input class="bf-display" v-model='bugForm.creator' type='string' name='creator' placeholder='Created By...'
            required>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <textarea class="bf-display" rows=5 v-model='bugForm.description' type='string' name='description'
            placeholder='Description...' required></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-4 ml-auto text-right">
          <button class="sbug-btn" type="submit">Submit Bug</button>
        </div>
      </div>
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

<style>
  .bf-display {
    resize: none;
    width: 100%;
  }


  .sbug-btn {
    margin-bottom: 10px;
    border-radius: 20px;
    border-color: black;
    border-width: 1px;
    color: black;
    background-color: white;
  }

  .sbug-btn:hover {
    background-color: rgb(0, 0, 0, .5);
    color: white;
    border-color: white;
  }

  .b-form {
    margin-top: 25px;
    margin-bottom: 15;
    background-color: rgb(0, 0, 0, 0.1);
  }
</style>