import { Stack, Typography } from '@mui/material'
import React from 'react'
import AvatarCard from './AvatarCard'

const ChatHeaderCompo = ({ name, avatar }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} padding={2} sx={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      {avatar && <AvatarCard avatar={avatar} />}
      <Typography variant="h6" color="primary"> {name} </Typography>
    </Stack>
  )
}

export default ChatHeaderCompo
