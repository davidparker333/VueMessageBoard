<template>
    <div>

    <div class="row">
      <div class="col-12">

        <h2 class="text-center my-5">Create a Post</h2>

        <form @submit.prevent="handleSubmit">
        <div class="mb-3">
        <label for="title" class="form-label">Post Title</label>
        <input type="text" class="form-control" id="title" v-model="formData.title">
        </div>
        <div class="mb-3">
        <label for="body" class="form-label">Post Body</label>
        <textarea class="form-control" id="body" rows="3" v-model="formData.body"></textarea>
        </div>

        <button type="submit" class="btn btn-primary my-4 post-button">Submit</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            formData: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        handleSubmit () {
            let title = this.formData.title
            let body = this.formData.body
            const payload = {
              title,
              body
            }
            this.addPost(payload)
            this.formData = {
              title: '',
              body: ''
            } 
            this.$router.push('/')
        },
        ...mapActions([
          'addPost'
        ])
    }
}
</script>

<style scoped>
.post-button {
  width: 100%;
}
</style>