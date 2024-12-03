import axios from 'axios';

const URL='http://localhost:8000';

export const addUser=async(data)=>{
    try{
      return await axios.post(`${URL}/add`,data)
    }catch(e){
       console.log("post api call error") 
    } 
}

export const getUsers=async()=>{
   
    try{

      return await axios.get(`${URL}/all`)
    }catch(e)
    {
      console.log("get api call error")
    }
}

export const getUser=async(id)=>{
   
  try{

    return await axios.get(`${URL}/${id}`)
  }catch(e)
  {
    console.log("get EditUser api call error")
  }
}
export const editUser=async(user,id)=>{
   
  try{

    return await axios.post(`${URL}/${id}`,user)
  }catch(e)
  {
    console.log("post EditUser api call error")
  }
}

export const deleteUser=async(id)=>{
   
  try{

    return await axios.delete(`${URL}/${id}`);
  }catch(e)
  {
    console.log("DeleteUser api call error")
  }
}