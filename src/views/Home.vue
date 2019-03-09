<template class="">
  <div class="home container-fluid bg-img">
    <div class="row">
      <div class="col no-pd">
        <h1 class="text-center title">Bug Reporter
        </h1>
      </div>
    </div>
    <div class="row">
      <bug-form></bug-form>
    </div>
    <div class="row">
      <table class='table t-display'>
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
  .bg-img {
    background-image: url('http://1.bp.blogspot.com/-A4qPdHh4qa0/UF_82fNqXeI/AAAAAAAACzU/9xvDjlhruqs/s1600/bugs_life_poster-1024x768.jpg');
    background-size: cover;
    height: 100vh;
  }

  .title {
    color: white;
    text-shadow: 1px 1px black;
    font-family: 'Ubuntu', sans-serif;
    font-size: 60px;
    background-color: rgba(0, 0, 0, 0.8);
    padding-bottom: 20px;
    padding-top: 20px;
    background-attachment: fixed;
  }

  .no-pd {
    padding: 0px;
  }

  .t-display {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-shadow: 1px 1px black;
  }

  .click {
    cursor: none;
  }
</style>