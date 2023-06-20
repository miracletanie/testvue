<template>
    <div>
        <h1> Post Page </h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>Actions</th>
                 </tr>
            </thead>

            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id}}</td>
                    <td>{{ post.body}}</td>
                    <td>
                        <router-link :to="{ name: 'postview', params: { id: post.id }}" class="btn btn-primary">Show</router-link>
                        <!-- <router-link :to="'/PostView/${PostView.id}'" class="btn btn-primary">Show</router-link> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: 'Posts' ,
     data() {
        return {
            postDetails: [],
        }; 
     },
     mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.formatPosts(response.data);
        })
    },
    methods:{
        formatPosts(postsData){
            for(let key in postsData) {
                this.postDetails.push({...postsData[key], id: key});
            }
        }
    }     
};
//fetch('https://jsonplaceholder.typicode.com/posts' title body)

</script>