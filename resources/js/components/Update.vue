<template>
  <div class="card card-default">
    <div class="card-header" style="text-align:center">Edit Post</div>
    <div class="card-body">
      <form v-on:submit="submitPostEdit()">
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
          <button class="btn btn-success">Update</button>
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
  created() {
    let id = this.$route.params.id;
    axios
      .get(`/posts/` + id + "/edit")
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    // Fetches posts when the component is created.

    submitPostEdit() {
      let id = this.$route.params.id;
      axios
        .patch(`/posts/` + id, this.posts)
        .then(response => {
          this.$router.push({path:"/"});
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>