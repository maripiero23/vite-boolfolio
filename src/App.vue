<script>
import TheHeader from './components/TheHeader.vue';
import axios from 'axios';


	export default {
    components: {TheHeader},
    data() {
        return {
          backendUrl: "http://127.0.0.1:8000",
          projects:[]
        };
    },
    methods:{
      fetchProjects(){
        axios.get(this.backendUrl + "/api/projects/")
        //siccome la chiamata avverrà in un secondo momento il then dice di aspettare che avvenga
        // la chiamata e poi si proceda con 
        .then((resp)=>{
          this.projects = resp.data;

        })

      }
    },
    mounted(){
      this.fetchProjects();
    }
}
</script>

<template>
  <TheHeader></TheHeader>

  <!--In Blade si usava lo @yeld("content")-->
  <!--In vue usiamo il tag router-view-->

  <router-view></router-view>

  <div class="container">
    <h1>Lista Progetti</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Type</th>
          <th>Technolgy</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <div v-if="project.cover_img">
            <img :src="backendUrl + 'storage/' + project.cover_img" alt="" style="width: 60px;">
          </div>
          <td><a :href="'project/' + project.id">{{ project.name }}</a></td>
          <td>{{ project.description }}</td>
          <td>{{ project.type }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use "styles/main"

</style>
