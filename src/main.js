import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { request } from './network/request'



createApp(App).use(store).use(router).mount('#app')


// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })

request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(reject=>{
  console.log(reject);
})