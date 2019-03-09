<template>
  <tbody>
    <tr class="click">
      <td @click="$router.push({name: 'bugDetails', params: {id:bugData._id}})">{{bugData.title}}</td>
      <td>{{bugData.creator}}</td>
      <td>{{bugData.createdAt}}</td>
      <td v-if="bugData.closed = false" @click="deleteBug"><input type="checkbox">Closed</td>
      <td v-else="bugData.closed = true" @click="deleteBug"><input type="checkbox">Open</td>
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
</style>