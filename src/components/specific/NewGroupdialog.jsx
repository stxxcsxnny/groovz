import React, { useState } from 'react';
import { Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';
import {  ClearSharp,   } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NewGroupDialog = () => {
  const navigate = useNavigate();
  const selectMemberHandler = (id) => {
    // handler logic
    setSelectMembers((prev) =>(prev.includes(id) ? prev.filter((item) => item !== id): [...prev, id]));
  };
  const subnitHandler = () => {
    
  }
  const closeDialog = () => {
    // handler logic
    navigate(0);

  }
  const groupname = useInputValidation('');
  const [Members, setMembers] = useState(sampleUsers);
  const [SelectMembers, setSelectMembers] = useState([]);

  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '3rem' }} width={'25rem'} spacing={'2rem' } bgcolor={"#202124"}>
        < ClearSharp onClick={closeDialog} sx={{ color:'white'}}/>
        <DialogTitle color='white' textAlign={'center'}>New Group</DialogTitle>
        <TextField  sx={{ label: { color: 'white', } }} value={groupname.value} onChange={groupname.changeHandler} label="Group Name" />
        
        <Typography color='white' variant="subtitle1">Add Members</Typography>
        <Stack spacing={1}>
          {Members.map((user) => (
            <UserItem key={user.id} user={user} handler={selectMemberHandler} />
          ))}
        </Stack>
        <Stack direction="center" justifyContent={'space-between'}  alignItems="center" mt={2}>
          <Typography color='white' variant="subtitle1">Cancel</Typography>
          <Typography color='white' variant="subtitle1" onClick={subnitHandler}>Create</Typography>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroupDialog;
