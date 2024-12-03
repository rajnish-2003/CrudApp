
import User from '../schema/user-schema.js';

export const addUser=async(request,response)=>{
    const user=request.body;
    const newUser=new User(user);

    try{
      await newUser.save();
      response.status(201).json(newUser);
    }catch(e)
    {
        response.status(400).json({message:e.message});
    }
}

export const getUsers=async(request,response)=>{
  try{
    const users=await User.find({});
    response.status(200).json(users)
    
  }catch(e)
  {
    response.status(404).json({message:e.message})
  }
  
}

export const getUser=async(request,response)=>{
  try{
    const user=await User.findById(request.params.id);
    response.status(200).json(user)
    
  }catch(e)
  {
    response.status(404).json({message:e.message})
  }
  
}


export const editUser=async(request,response)=>{
  let user=request.body;
  const editUser=new User(user);
  try{
    await User.updateOne({_id:request.params.id},editUser);
     response.status(201).json(editUser);
    
  }catch(e)
  {
    response.status(404).json({message:e.message})
  }
  
}


export const deleteUser=async(request,response)=>{
  
 
  try{
    await User.deleteOne({_id:request.params.id});
     response.status(200).json({message:'User Deleted'})
    
  }catch(e)
  {
    response.status(404).json({message:e.message})
  }
  
}