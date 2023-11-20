import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'
import logoimg from './img/logo.jpg'
import { ButtonGroup, Search } from '@mui/material';

export default function Navbar() {
  return (
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position = 'fixed' sx =  {{backgroundColor: 'white' , height: 'auto'}} >
        <Toolbar>

          <Link to = '/'>
          <Box component='img'
          sx = {{height: '50px', marginRight: 'auto' , marginLeft: '50px'}}
          src={logoimg} />
          </Link>
          <Box flexGrow = {1}/>
          <Link to = '/login'><Button sx = {{color: 'black', fontWeight: 'bold'}}variant='contained' color="inherit">Login</Button></Link>
            <Link to = '/signup'><Button sx = {{marginLeft : '20px', color: 'black', fontWeight: 'bold'}} color="inherit" variant='contained'>Signup</Button></Link>  
          </Toolbar>
      </AppBar>
    </Box>
    
    
  );
}