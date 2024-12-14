import { useInputValidation } from '6pp'
import { Search } from '@mui/icons-material';
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useNavigate } from 'react-router-dom';


const Searchdialog = () => {

  const navigate = useNavigate();

  const closesearchDialogue = () => {

    navigate(0);
    
}

  const search = useInputValidation('');
  let isLoadingFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);
  
  const addFriendHandler = (id) => {
    console.log(id);
  }
  return (
    <Dialog  open>
      <Stack p={'2rem'} direction={'column'} width={'25rem'} bgcolor={"#202124"}>
      <ClearSharpIcon  sx={{color:'white'}} onClick={closesearchDialogue} />
        <DialogTitle marginBottom={'1rem'} color='white' textAlign={'center'}>Find people</DialogTitle>
        <TextField sx={{
          text:{ color:'white', fontSize:'15px' } 
        }} label='' value={search.value} onChange={search.changeHandler} variant='standard' size='small' InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search sx={{color:'white'}} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              
            </InputAdornment>
          )
        }} 
        />

        <List>
          
       
         
        </List>
    </Stack>
    </Dialog>
  )
}

export default Searchdialog