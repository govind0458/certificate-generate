import axios from 'axios'

export async  function save(data){
    return await axios.post('http://localhost:9100/user',data);
}
export function Getdata(){
    return axios.get('http://localhost:9100/user/fetch')
}

export function updateData(id,data){
    return axios.put('http://localhost:9100/user/update/')
}