<template>
  <div class="card">
    <div class="card-header">
      <router-link to="/create" class="btn btn-info float-right">Create new post</router-link>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) of posts" v-bind:key="index">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>
              <button class="btn btn-info btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(`/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
};
</script>