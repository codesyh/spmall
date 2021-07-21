import { createStore } from 'vuex'
import {INCREMENT}  from './mutations-type'
import Vue from 'vue'

export default createStore({
  state: {
    data:1000,
    date:[45,5749,8,54,5,1,456,7,8,61,3,2,64,98,7,42123,123,45,65],
    info:{
      name:123,
      age:12,
      type:'mole'
    }
  },
  mutations: {
    updateinfo(state){
      state.info['height']=456

    },
    addcount(state,count){ 
      state.data+=count

    },
    subcount(state,count){
      state.data-=count
    },
    [INCREMENT](state){
      delete state.info.name
      state.data++

    },
    decrement(){
      this.state.data--
    }
  },
  getters: {
    add(state){
      return state.data+state.data
    },

    filterdate(state){
      return age=>state.date.filter((val)=>val>age)
    }

  },
  actions: {
    [INCREMENT](context,paload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit(INCREMENT)
          console.log(paload);
          resolve(123)
          },1000)
      })
    }
  },
  modules: {
  }
})
