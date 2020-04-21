<template>
  <div class="card card-default">
    <div class="card-header" style="text-align:center">Create new post</div>
    <div class="card-body">
      <form v-on:submit="submitPost()">
        <div class="form-group">
          <input type="text" class="form-control" v-model="posts.title" placeholder="Title..." id />
        </div>
        <div class="form-group">
          <textarea
            v-model="posts.description"
            class="form-control"
            id
            rows="5"
            placeholder="Description..."
          ></textarea>
        </div>
        <div class="form-group">
          <router-link to="/" class="btn btn-warning">Cancel</router-link>
          <button class="btn btn-success">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      posts: {
        title: "",
        description: ""
      },
      errors: []
    };
  },
  methods: {
    // Fetches posts when the component is created.
    submitPost() {
      axios
        .post(`/posts`, this.posts)
        .then(response => {
          this.$router.push({ path: "/" });
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>