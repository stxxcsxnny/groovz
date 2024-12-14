import React, { useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { AttachFile, Call, Info, InfoOutlined, Send, VideoCall, VideoCallRounded } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { sampleMessages } from '../constants/sampleData';
import MessegeComponent from '../components/shared/MessegeComponent';
import ChatHeaderCompo from '../components/shared/ChatHeaderCompo';

const user = {
  _id: 'jjjjjgyfy',
  name: 'sunny',
};

const Chat = () => {
  const containRef = useRef(null);

  return (
    <>
      <Stack
        direction={'row'}
        height={'10%'}
        width={'100%'}
        bgcolor={'#346b59'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'10px'}
        borderRadius={{xs: '0px', sm: '0px', md: '0px', lg: '10px'}}
      >
        <Box
          marginLeft={'20px'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
        >
          <Typography variant='h6' color={'white'}>
          
          <ChatHeaderCompo/>
        
          </Typography>
        </Box>
        <Stack direction={'row'} marginRight={'20px'} alignItems={'center'}>
          <Call style={{ color: 'white', marginRight: '10px' }} />
          <VideoCallRounded style={{ color: 'white', marginRight: '10px' }} />
          <InfoOutlined style={{color: 'white', marginRight: '10px'}}/>
        </Stack>
      </Stack>
     
      <Stack
        ref={containRef}
        boxSizing={'border-box'}
        padding={'1rem'}
        spacing={'1rem'}
        height={'80%'}
        sx={{ overflowX: 'hidden', overflowY: 'auto', scrollbarWidth:'none' }}
      >
        {sampleMessages.map((i) => (
          <MessegeComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>

      <form style={{ height: '10%' }}>
        <Stack
          direction={'row'}
          height={'80%'}
          width={'90%'}
          textAlign={'center'}
          position={'relative'}
          marginLeft={'5%'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '0.1px solid white',
            borderRadius: '30px',
          }}
        >
          <IconButton
            type='submit'
            sx={{
              color: 'white',
              height: '50%',
              width: '7%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '1rem',
              padding: '0.5rem',
              rotate: '-30deg',
              '&:hover': { rotate: '-45deg' },
            }}
          >
            <AttachFile />
          </IconButton>
          <InputBox placeholder='Send message' />
          <IconButton
            type='button'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '1rem',
              padding: '0.5rem',
            }}
          >
            <Send sx={{ color: 'white', '&:hover': { color: '#2a64d1' } }} />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
