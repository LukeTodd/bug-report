<template>
  <tbody>
    <tr>
      <td>{{noteData.creator}}</td>
      <td>{{noteData.content}}</td>
      <td class="text-right"><button class="details-btn" @click='deleteNote'>Delete Note</button></td>
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
        let closed = this.$store.state.activeBug
        if (closed.closed == true) { alert('Sorry, you cannot delete a note on a closed ticket') }
        else this.$store.dispatch('deleteNote', this.noteData._id)
      }
    }
  }


</script>



<style>


</style>