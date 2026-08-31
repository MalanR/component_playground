import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function appBar(label: string){
  return (
    <Toolbar>
      <IconButton edge="start" color="primary" aria-lable="menu" sx={{ mr: 2 }}>
        <menuIcon />
      </IconButton>
      <Typography>
        
      </Typography>
    </Toolbar>
  );
}

export default App
