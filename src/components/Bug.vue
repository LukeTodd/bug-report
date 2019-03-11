<template>
  <tbody>
    <tr class="click" :class="[bugData.closed ? 'strike' : '']"
      @click="$router.push({name: 'bugDetails', params: {id:bugData._id}})">

      <td>{{bugData.title}}</td>
      <td>{{bugData.creator}}</td>
      <td>{{bugData.createdAt}}</td>
      <td v-if="bugData.closed == false">Open</td>
      <td v-else="bugData.closed == true">Closed</td>


    </tr>
  </tbody>

</template>

<script>
  export default {
    name: 'bug',
    props: ['bugData'],
    methods: {
      deleteBug(id) {
        this.$store.dispatch('deleteBug', id)
      }
    }
  }



</script>




<style>
  .click {
    cursor: pointer;
  }

  .strike {
    text-decoration: line-through;
  }
</style>