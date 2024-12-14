import { Add as AddIcon } from '@mui/icons-material';
import { Avatar, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';

const UserItem = ({ user, handler, handlerIsLoading, isAdded=false, style={} }) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'} width={'100%'} {...style}>
        <Avatar src={avatar} />
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Typography>
        <IconButton
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          size='small'
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: '#1b876c',
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
