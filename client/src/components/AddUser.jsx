
import { useState } from "react";
import { FormGroup,FormControl,Input,InputLabel,Typography,styled,Button} from "@mui/material";
import {addUser} from '../service/api';
import {useNavigate} from 'react-router-dom';

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




const AddUser=()=>{


    const navigate=useNavigate();

    const [user,setUser]=useState(defaultvalue)
    const onValueChange=(e)=>{
      console.log(e.target.name,e.target.value);
      setUser({...user,[e.target.name]:e.target.value})
    }

   const AdduserDetail=async()=>{
       await addUser(user);
       navigate('/all');
   }


    return(
        <Container>
            <Typography variant="h4">AddUser</Typography>
         <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="name"/>
         </FormControl>
         <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="username"/>
         </FormControl>
         <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="email"/>
         </FormControl>
         <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="phone"/>
         </FormControl>
         <FormControl>
            <But variant="contained" onClick={()=>AdduserDetail()}>ADD USER</But>
         </FormControl>
        </Container>
    )
}

export default AddUser;