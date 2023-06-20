<template>
  <TheNavigation/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
          <rouer-view></rouer-view>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
export default {
  name: 'App',
  components:{
    TheNavigation
  },
}
</script>


<style>

</style>
