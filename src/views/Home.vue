<template>
  <div class="home container-fluid bg-img">
    <div class="row">
      <div class="col no-pd">
        <h1 class="text-center title">Bug Reporter
        </h1>
      </div>
    </div>
    <div class="row bg-black">
      <bug-form></bug-form>
      <div class='col-3 ml-auto sort text-right'>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a @click='sortByOpen' class="dropdown-item" href="#">Open</a>
            <a @click='sortByClosed' class="dropdown-item" href="#">Closed</a>
            <a class="dropdown-item" href="#">Most Recent</a>
            <a class="dropdown-item" href="#">Oldest</a>

          </div>
        </div>
      </div>
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
    data() {
      return {

      }
    },
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
    },
    methods: {

      sortByOpen() {
        let bugs = this.$store.state.bugs
        bugs.sort(function (a, b) {
          return a.closed - b.closed
          // return this.$store.dispatch('getBugs')
        })
      },
      sortByClosed() {
        let bugs = this.$store.state.bugs
        bugs.sort(function (a, b) {
          return b.closed - a.closed
        })
      },
      sortByRecent() {
        let bugs = this.$store.state.bugs
        bugs.sort(function (a, b) {
          return b.createdAt - a.createdAt
        })
      },
      sortByOldest() {
        let bugs = this.$store.state.bugs
        bugs.sort(function (a, b) {
          return a.createdAt - b.createdAt
        })
      }
    }
  }
</script>


<style>
  .bg-img {
    background-image: url('http://1.bp.blogspot.com/-A4qPdHh4qa0/UF_82fNqXeI/AAAAAAAACzU/9xvDjlhruqs/s1600/bugs_life_poster-1024x768.jpg');
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .title {
    color: white;
    text-shadow: 1px 1px black;
    font-family: 'Ubuntu', sans-serif;
    font-size: 60px;
    background-color: rgba(0, 0, 0, 0.8);
    padding-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 0px;
    border-bottom: 1px solid white;
  }

  .no-pd {
    padding: 0px;
  }

  .t-display {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-shadow: 1px 1px black;
    margin-bottom: 200px;
  }

  .bg-black {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .sort {
    margin-top: 190px;
    color: white;
    text-shadow: 1px 1px black;
  }

  #dropdownMenuButton {
    background-color: white;
    color: black;
    padding-top: 5px;
    border-radius: 25px;
  }
</style>



<!-- Application issues
Body doesn't take up whole page. is this a Vue issue? maybe pagination to fix
how to get popper.js to work with drop down or js drop down to @ click
how to format date
how to have sort persist on refresh
On details page need form to reset
still need to do some styling, especially on form and buttons --- Done
User cannot add comment on closed post but should have some visual indication of this for the user --- Done
-->