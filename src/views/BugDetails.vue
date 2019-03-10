<template>
  <div class="container-fluid bg-img">
    <div class="row">

      <div class="card card-display">
        <h5 class="card-header text-center b-white">{{bug.title}}</h5>
        <div class="card-body">
          <p class="card-text">{{bug.description}}</p>
          <button v-on:click="bug.createdAt = !bug.createdAt">Edit Bug</button>

          <form v-if="!bug.createdAt" @submit.prevent='editBug'>
            <textarea rows=1 class="f-display" v-model='bugEdit.title' type='string' name='title'
              placeholder="Title..."></textarea>
            <textarea class="f-display" rows=5 wrap=hard v-model='bugEdit.description' type='string' name='description'
              placeholder="Description..."></textarea>
            <button type='submit'>Submit Edit</button>
          </form>
          <button class="note-btn text-right" v-on:click="showForm = !showForm">Add Note</button>
          <form v-if="showForm" @submit.prevent='addNote'>
            <textarea rows=1 class="f-display" v-model='bugNote.creator' type='string' placeholder="Created By..."
              required></textarea>
            <textarea rows=5 class="f-display" v-model='bugNote.content' type='string' name='comment'
              placeholder='Add Note...' required></textarea>
            <button type='submit'>Submit Note</button>
          </form>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col">
        <h3 class='text-center note-display'>Notes</h3>
        <table class="table t-display">
          <thead>
            <tr>
              <th scope="col">Created By:</th>
              <th scope="col">Details:</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <bug-notes v-for="(note, index) in notes" :noteData='note'>
          </bug-notes>
        </table>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>


<script>
  import BugNotes from '@/components/BugNotes.vue'
  import Bug from '@/components/Bug.vue'
  export default {
    name: 'bugDetails',
    data() {
      return {
        bugEdit: {},
        bugNote: {},
        showForm: false
      }
    },
    mounted() {
      this.$store.dispatch('getActiveBug', this.$route.params.id)
      this.$store.dispatch('getNotes', this.$route.params.id)
    },
    computed: {
      bug() {
        return this.$store.state.activeBug
      },
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      editBug() {
        return this.$store.dispatch('editBug', this.bugEdit)
      },
      addNote() {
        return this.$store.dispatch('createNote', this.bugNote)
      }
    },
    components: {
      Bug,
      BugNotes
    }
  }

</script>

<style>
  .card-display {
    margin: 20px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-shadow: 1px 1px black;
    border-color: white;
  }

  .f-display {
    width: 100%;
    resize: none;
  }

  .note-btn {
    color: black;
  }

  .b-white {
    border-color: white;
  }

  .note-display {
    color: white;
    text-shadow: 1px 1px black;
    background-color: rgba(0, 0, 0, 0.8);
    border-color: white;
    border-style: solid;
    border-width: 1px;
    margin-top: 100px;
  }
</style>