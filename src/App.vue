<template>
<div>
    <p>{{this.$store.state.info}}</p>
    <button @click="updateinfo">update</button>
    <p>--------------------------</p>
    <p>{{this.$store.state.data}}</p>
    <p>{{this.$store.getters.add}}</p>
    <p>{{this.$store.getters.filterdate(1000)}}</p>
    <button @click="increment">+</button><button @click="subtion">-</button>
    <br/>
    <button @click="addcount(5)">+</button><button @click="subcount(5)">-</button>
  </div>
  
</template>
<script>
import home from  './components/home.vue'
import {INCREMENT}  from './store/mutations-type'
export default {
  name:'App',
  Comment:home,
  methods:{
    updateinfo(){
      this.$store.commit('updateinfo');
    },
    [INCREMENT](){
      this.$store.dispatch(INCREMENT,'message in').then(res=>{
        console.log(res);
      })
      
    },
    subtion(){
      this.$store.commit('decrement');
    },
    addcount(count){
      
      this.$store.commit('addcount',count);
    },
    subcount(count){
      
      this.$store.commit('subcount',count);
    }

  }
    
  }

</script>


<style>

</style>
