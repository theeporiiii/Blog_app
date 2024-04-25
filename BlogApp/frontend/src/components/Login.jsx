import { Button, Grid, TextField, Typography  } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [inputs,setInputs]=useState([]);
    const navigate = useNavigate();

    const inputHandler=(e)=>{
      
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    }

    const submitHandler=()=>{
        console.log("btn clicked");
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
          console.log(res);
          console.log(res.data.person);
          alert(res.data.message);
          if(res.data.message==="successfully loged in"){
            const userId = res.data.person._id;
            sessionStorage.setItem("id",userId);
            
            navigate('/view');
          }
                })
    }

  return (
    <div style={{margin:'8%'}}>
      <Typography variant='h3' style={{color:'green' , fontFamily:'fantasy'}}>
        Login Form
      </Typography>
      <br />
      <br />
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
      <TextField
        variant='outlined'
        label='Uername'
        name='username'
        onChange={inputHandler}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
        variant='outlined'
        label='Password'
        name='password'
        onChange={inputHandler}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='success' onClick={submitHandler}>Log In</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
      <Link to={'/sign'}>Sign Up</Link>
      </Grid>
      </Grid>
    </div>
  )
}

export default Login