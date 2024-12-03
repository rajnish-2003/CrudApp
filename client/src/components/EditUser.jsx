
import { useState,useEffect } from "react";
import { FormGroup,FormControl,Input,InputLabel,Typography,styled,Button} from "@mui/material";

import {useNavigate,useParams} from 'react-router-dom';
import { getUser,editUser } from "../service/api";


const Container=styled(FormGroup)`
width:35%;
margin:5% auto 0 auto;
background-color:#F9F9F9;
padding:20px;
& > div{
    margin-top:20px;
};
`
const But=styled(Button)`
width:25%;
margin:auto;
`
const defaultvalue={
    name:'',
    username:'',
    email:'',
    phone:''
}




const EditUser=()=>{


    const navigate=useNavigate();
     useEffect(()=>{
        loadUser();
     },[]);

     const {id}=useParams();

    const loadUser=async()=>{
        const response=await getUser(id);
        setUser(response.data);
    }

    const [user,setUser]=useState(defaultvalue)
    const onValueChange=(e)=>{
      console.log(e.target.name,e.target.value);
      setUser({...user,[e.target.name]:e.target.value})
    }

   const EdituserDetail=async()=>{
       await editUser(user,id);
       navigate('/all');
   }


    return(
        <Container>
            <Typography variant="h4">EditUser</Typography>
         <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
         </FormControl>
         <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
         </FormControl>
         <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
         </FormControl>
         <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
         </FormControl>
         <FormControl>
            <But variant="contained" onClick={()=>EdituserDetail()}>EDIT USER</But>
         </FormControl>
        </Container>
    )
}

export default EditUser;