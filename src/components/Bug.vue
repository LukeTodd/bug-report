<template>
  <tbody>
    <tr @click="$router.push({name: 'bugDetails', params: {id:bugData._id}})">
      <td>{{bugData.title}}</td>
      <td>{{bugData.creator}}</td>
      <td>{{bugData.createdAt}}</td>
      <td>{{bugData.closed}}</td>
    </tr>
  </tbody>

</template>

<script>
  export default {
    name: 'bug',
    props: ['bugData']

  }
</script>




<style>
  tr {
    cursor: pointer;
  }
</style>