import axios from 'axios'
export function request(config){
  const instanse=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  return instanse(config)

}