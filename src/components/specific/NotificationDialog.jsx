import { Button, Dialog, DialogTitle, Stack, Typography, ListItem } from '@mui/material';
import React from 'react';
import { sampleNotification } from '../../constants/sampleData';
import { memo } from 'react';
import { CleanHands, ClearSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotificationDialog = ({ _id, accept }) => {
  const friendRequestHandler = (id) => {
    // handler logic
  };
  const navigate=useNavigate();

  const closeDialog = () => {
    navigate(0);
    
  }

  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} bgcolor={'#202124'}>
        <ClearSharp color='white' onClick={closeDialog } />
        <DialogTitle color='white'>Notification</DialogTitle>
        {
          sampleNotification.length > 0 ? (
            sampleNotification.map((item) => (
              <NotificationItem key={item._id} {...item} handler={friendRequestHandler} />
            ))
          ) : (
            <Typography color='white' textAlign="center">No Notifications</Typography>
          )
        }
      </Stack>
    </Dialog>
  );
};

const NotificationItem = ({ sender, _id, handler }) => {
  const { name } = sender;
  return (
    <ListItem>
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'} width={'100%'}>
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color:'white'
          }}
        >
          {`  ${name}   sent you a friend request`}
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default memo(NotificationDialog);
