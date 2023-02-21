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
          this.projects= resp.data;

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
  <ProjectCard></ProjectCard>

  <!--In Blade si usava lo @yeld("content")-->
  <!--In vue usiamo il tag router-view-->

  <router-view></router-view>


</template>

<style lang="scss">
@use "styles/main"

</style>
