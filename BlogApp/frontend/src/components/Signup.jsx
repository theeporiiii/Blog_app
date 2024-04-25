import { Typography ,Grid , TextField , Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const [inputs,setInputs]=useState({});

    const submitHandler=()=>{
        console.log("btn clicked",inputs);
        axios.post("http://localhost:3008/api/post",inputs)
        .then((res)=>{
          console.log(res);
          alert(res.data.message);
                })
    }

    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    }


  return (
    <div style={{margin:'8%'}}>
      <Typography variant='h2' style={{color:'green', fontFamily:'fantasy'}}>
        SignUp Form
      </Typography>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              label='Name'
              fullWidth
              name='name'
              onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              label='Email'
              fullWidth
              name='email'
              onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField
              variant='outlined'
              label='Address'
              fullWidth
              multiline
              minRows={4}
              name='address'
              onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              label='Username'
              fullWidth
              name='username'
              onChange={inputHandler}
              />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              label='Password'
              fullWidth
              name='password'
              onChange={inputHandler}
              />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant="outlined" onClick={submitHandler} color='success'>Submit</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Link to={'/'}>Back to login</Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup