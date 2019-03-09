<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card card-display">
        <h5 class="card-header text-center">{{bug.title}}</h5>
        <div class="card-body">
          <p class="card-text">{{bug.description}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  import Bug from '@/components/Bug.vue'
  export default {
    name: 'bugDetails',
    mounted() {
      this.$store.dispatch('getActiveBug', this.$route.params.id)
    },
    computed: {
      bug() {
        return this.$store.state.activeBug
      }
    },
    methods: {

    },
    components: {
      Bug
    }
  }

</script>

<style>
  .card-display {
    margin: 20px auto;
  }
</style>