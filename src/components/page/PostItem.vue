<template>
    <h1>Post Details</h1>
    <div>
        <!-- <div>Id: {{ PostView.id }}</div>
        <div>Description: {{ PostView.body }}</div> -->Pas de souci
    </div>
</template>
<script>
// import { Axios } from "axios";
export default {
    data() {
        return {
            post:'',
            id:'',
        };
    },
    // created() {
    //     this.id = this.$route.params.id;
    //     Axios.get('posts.json?id=${this.id}').then(response => {
    //         this.post = response.data[this.id];
    //     })
    // },
}

</script>