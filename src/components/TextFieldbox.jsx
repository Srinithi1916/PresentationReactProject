import React from 'react';
import {Stack, TextField, Typography } from '@mui/material';

const TextFieldbox = ({ElementName,placeHolderText , idName}) => {
    const setStart = {display : 'flex' , justifyContent: 'flex-start', alignItems : 'flex-start'};

  return (
    <div>
        <Stack style = {setStart} spacing = {1}>
            <Typography>{ElementName}</Typography>
            <TextField hidden placeholder={placeHolderText} id = {idName} fullWidth></TextField>
        </Stack>
    </div>
  )
}

export default TextFieldbox