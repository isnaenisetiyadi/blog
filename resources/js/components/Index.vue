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
            <th scope="col" style="width:30%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) of posts" v-bind:key="index">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>
              
              <router-link :to="{name: 'readPost', params:{id:post.id}}" class="btn btn-info btn-sm">
                <i class="fa fa-eye" aria-hidden="true"></i>
                <!-- <i class="fa fa-address-book-o" aria-hidden="true"></i> -->
               View</router-link>
              <router-link :to="{name: 'editPost', params:{id:post.id}}" class="btn btn-warning btn-sm"><i class="fa fa-code" aria-hidden="true"></i> Edit</router-link>
              <!-- <button class="btn btn-warning btn-sm">
                <i class="fa fa-code" aria-hidden="true"></i>
                 Edit</button> -->
              <button class="btn btn-danger btn-sm" v-on:click="submitPostDelete(post.id,index)">
                <i class="fa fa-trash" aria-hidden="true"></i>
                 Delete</button>
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
  },
  methods: {
    submitPostDelete(id, index) {
      if (confirm("Click 'Ok' to delete.")){
      // let id = this.$route.params.id;
      axios
        .delete(`/posts/` + id)
        .then(response => {
          // this.$router.push({path:"/"});
          this.posts.splice(index, 1);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
    }
  }
};
</script>