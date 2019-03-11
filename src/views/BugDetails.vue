<template>
  <div class="container-fluid bg-img">
    <div class="row">
      <div class="col-12" style="padding-left: 0px; padding-right: 0px;">
        <div class="card card-display">
          <div class="row">
            <div class="col-12">
              <h3 class="card-header text-center b-white">{{bug.title}}</h3>
            </div>
          </div>
          <div class="card-body" style="padding-bottom: 0px;">
            <div class="row">
              <div class="col-12">
                <p class="card-text text-center">{{bug.description}}</p>
              </div>
            </div>
            <div class="row" style="padding-top: 30px;">
              <div class="col-6">
                <button class='details-btn' v-on:click="bug.createdAt = !bug.createdAt">Edit Bug</button>
                <form v-if="!bug.createdAt" @submit.prevent='editBug'>
                  <textarea rows=1 class="f-display" v-model='bugEdit.title' type='string' name='title'
                    placeholder="Title..."></textarea>
                  <textarea class="f-display" rows=5 wrap=hard v-model='bugEdit.description' type='string'
                    name='description' placeholder="Description..."></textarea>
                  <button type='submit' class='details-btn'>Submit Edit</button>
                </form>
              </div>
              <div class="col-6 text-right">
                <button class="details-btn text-right" v-on:click="showForm = !showForm">Add Note</button>
                <form v-if="showForm" @submit.prevent='addNote'>
                  <textarea rows=1 class="f-display" v-model='bugNote.creator' type='string' placeholder="Created By..."
                    required></textarea>
                  <textarea rows=5 class="f-display" v-model='bugNote.content' type='string' name='comment'
                    placeholder='Add Note...' required></textarea>
                  <button class='details-btn' type='submit'>Submit Note</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2 ml-auto text-right">
        <button class='details-btn' @click='deleteBug'>Close
          Ticket</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class='text-center note-display' style='margin-bottom: 0px; padding: 10px 0px;'>Notes</h3>
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
        let closed = this.$store.state.activeBug
        if (closed.closed == true) { alert("Sorry, You cannot edit a bug on a closed ticket") }
        else return this.$store.dispatch('editBug', this.bugEdit)
        return reset()
      },
      addNote() {
        let closed = this.$store.state.activeBug
        if (closed.closed == true) { alert("Sorry, You cannot add a note to a closed ticket") }
        else return this.$store.dispatch('createNote', this.bugNote)
      },
      deleteBug() {
        let closed = this.$store.state.activeBug
        let txt = ''
        if (closed.closed == true) { alert('This ticket is already closed') }
        else if (confirm("Are you sure you want to close the ticket? You will not be able to add notes or edits once this is closed")) {
          return this.$store.dispatch('deleteBug')
        } else {
          txt = "You pressed Cancel!";
        }
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
    /* width: 100%; */
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

  .details-btn {
    margin-bottom: 10px;
    border-radius: 20px;
    border-color: black;
    border-width: 1px;
    color: black;
    background-color: white;
  }

  .details-btn:focus {
    outline: none;
  }

  .details-btn:hover {
    background-color: rgb(0, 0, 0, .5);
    color: white;
    border-color: white;
  }
</style>