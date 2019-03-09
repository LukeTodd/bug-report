<template>
  <tbody>
    <tr @click="$router.push({name: 'bugDetails', params: {id:bugData._id}})">
      <td>{{bugData.title}}</td>
      <td>{{bugData.creator}}</td>
      <td>{{bugData.createdAt}}</td>
      <td v-if="bugData.closed = false">Closed</td>
      <td v-else="bugData.closed = true">Open</td>
    </tr>
  </tbody>

</template>

<script>
  export default {
    name: 'bug',
    props: ['bugData'],
    methods: {

    }
  }

  }
</script>




<style>
  tr {
    cursor: pointer;
  }
</style>