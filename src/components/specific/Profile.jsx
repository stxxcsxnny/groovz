import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon , AlternateEmail as UsernameIcon,CalendarMonth as CalenderIcon } from '@mui/icons-material'

const Profile = () => {
  return (
    <Stack spacing={'2rem'} direction={'column'} alignItems={'center'}>
      <Avatar
        sx={{
          width: '8rem',
          height: '8rem',
          objectFit: 'contain',
          marginBottom: '1rem',
          border:'5px solid white '
        }}
      />
      <ProfileCard text={'ghth'} heading={'nggdgxngng'}/>

    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) => <Stack direction={'column'} alignItems={'center'} spacing={'1rem'} color={'white'} textAlign={'center'}
>
  {Icon && Icon}
  <Typography variant='body1'>{text }</Typography>
  <Typography color={'gray'} variant='caption'>{heading}</Typography>

</Stack>
export default Profile