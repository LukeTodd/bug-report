<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Bug Reporter</h1>
      </div>
    </div>
    <div class="row">
      <bug-form></bug-form>
    </div>
    <div class="row">
      <table class='table'>
        <thead>
          <tr>
            <th scope="col">Title:</th>
            <th scope="col">Created By:</th>
            <th scope="col">Created At:</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <bug v-for="(bug, index) in bugs" :bugData='bug'></bug>
      </table>
    </div>
  </div>
</template>

<script>

  import Bug from '@/components/Bug.vue'
  import BugForm from '@/components/BugForm.vue'
  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      BugForm,
      Bug
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    }
  }
</script>


<style>
  bug {
    cursor: pointer;
  }
</style>