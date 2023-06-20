<template>
  <div>
      <div>
        <!-- on cre ici un pour bouton avec une methode pour accéder à la page post -->
        <button @click.prevent="onPostsClick()">
          Allons a la page de post
        </button>
      </div>
     <div> Home page</div>
  </div>
</template>

<script>
export default {
  methods:{
    onPostsClick(){
      // this.$router.push('PostView');
      //replace  permet de revenir en arier sans le id
      // this.$router.replace({path:'PostView',query:{id:1}} );
      // this.$router.go(); A quoi ca sert?
    },
  }
  
}
</script>