import { Button, Card,Grid, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Addblog = ({props,update}) => {
  var location = useLocation();
  console.log("location:",location.state)
  var[post,setPost] = useState({title:'',post:'',url:''});
  const navigate =useNavigate()

useEffect(()=>{
  if(location.state!=null){
    setPost({...post,title:location.state.val.title,post:location.state.val.post,url:location.state.val.url})
  }else{
    setPost({...post,title:'',post:'',url:''})
  }

},[])

  const inputHandler = (e) =>{
    setPost({...post,[e.target.name]:e.target.value})
    console.log(post)
  }
  
  const addPost=()=>{
    if(location.state!=null){
      axios.put("http://localhost:3008/api/update/"+location.state.val._id,post)
      .then((res)=>{
        if(res.data.message=="blog added"){
          alert(res.data.message)
          navigate('/view')
        }else{
          alert('SUCESSFULLY ADDED')
    }
  })
}else{
  console.log("btn",post);
    axios.post("http://localhost:3008/api/addblog",post)
    .then((res)=>{
      alert(res.data.message)
      navigate('/view')
    })
    .catch((err)=>{
      console.log(err);
    })
}
  }
  return (
    <div style ={{margin:'8%'}}>
      <Typography variant='h2' style={{fontFamily:'initial',color:'green'}}>
        Add Blog
      </Typography><br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' onChange={inputHandler} fullwidth name='title'value={post.title} label='post title'></TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' onChange={inputHandler} fullwidth name='post'value={post.post} minRows={4} label='type a post'></TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField variant='outlined' onChange={inputHandler} fullwidth name='url' value={post.url} minRows={4} label='image URL'></TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant='contained' onClick={addPost} color='primary'>Go</Button>
          </Grid>
          </Grid>
    </div>
  )
}

export default Addblog