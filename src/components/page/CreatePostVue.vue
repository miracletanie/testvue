<template>
    <div>
        <h3> Create Page </h3> 
        <form @submit.prevent="onCreatePost">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" v-model="body"></textarea>
            </div>

            <div>
                <button type="submit" class="btn btn-primary">enregistrer</button>
            </div>

            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            title:'',
            body:'',
        };
    }, 
        methods: {
            onCreatePost(){
                axios.post(
                    'https://jsonplaceholder.typicode.com/posts', 
                    {
                    title: this.title,
                    body: this.body,
                },
                ).then(response => {
                    console.log(response);
                    this.$router.push('PostView');
                });
            },
        },
      
};
</script>