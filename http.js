import axios from 'axios'
 const http = axios.create({
   // baseURL:'http://192.168.2.20:9000/users/login/'
   // baseURL:'http://112.74.99.5:3000/web/api'

      baseURL:'http://192.168.2.20:9000/market/'
   // baseURL:'http://192.168.2.20:9000/wechat/'
   
 })
 export default http