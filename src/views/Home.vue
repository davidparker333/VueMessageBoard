<template>
  <div class="home">

    <div class="row">
      <div class="col-12">

        <h2 class="text-center my-5">Vue Message Board</h2>

        <div class="row">
        <div v-for="(message, index) in messages" :key="index" class="messages-container col-4 my-1">
        <Message :message="message" />
        </div>
        </div>

        <router-link to="/post"><button class="btn btn-primary my-4 post-button">Add a Post</button></router-link>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from '../components/Message.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Message
  },
  computed: {
    ...mapState([
      'messages'
    ])
  }
}
</script>

<style scoped>
.post-button {
  width: 100%;
}
</style>
