<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{bug.title}}</h1>
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