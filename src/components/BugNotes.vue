<template>
  <tbody>
    <tr>
      <td>{{noteData.creator}}</td>
      <td>{{noteData.content}}</td>
      <td><button @click='deleteNote'>Delete Note</button></td>
    </tr>
  </tbody>
</template>



<script>
  export default {
    name: 'bugNotes',
    props: ['noteData'],
    computed: {

    },
    methods: {
      deleteNote() {
        this.$store.dispatch('deleteNote', this.noteData._id)
      }
    }
  }


</script>



<style>


</style>