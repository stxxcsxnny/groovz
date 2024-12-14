import { Button, Container, Paper, TextField, Typography, Stack, Avatar, IconButton, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { CameraAlt, PixOutlined } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/Validator'


import { AccountCircle } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility';


const backgroundImg = 'https://wallpapercave.com/wp/wp6559609.jpg';
const Login = () => {



  const [islogin, setIsLogin] = useState(true)
  const toggleLogin = () => {
    setIsLogin(false)
  }
  const toggleSignUp = () => {
    setIsLogin(true)
  }

  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const email = useInputValidation("");
  const password = useStrongPassword();
  const confirmPassword = useInputValidation("");


  const avatar = useFileHandler("single")

  const handlelogin = (e) => {
    e.preventDefault();
    console.log('login')
  }

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('signup')
  }



  return (

    <div className="background" style={{
      backgroundColor:'#72e7c0'
      
      
      

    }}>
      <Container component={'main'} maxWidth='xs' sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        <div
          style={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(0,0,0,0.2)', width: '100%' }}
        >
          {islogin ? <>

            <Typography variant='h4' sx={{ fontFamily: "Rubik Puddles", borderBottom: '1px solid white ', color: 'white', marginTop: '1rem', '&:hover': { color: 'blue' } }} >USER LOGIN</Typography>
            <form style={{
              width: '90%',
              marginTop: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',


            }}
              onSubmit={handlelogin}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }} >
                <AccountCircle sx={{ color: 'white', mr: 1, my: 1, width: '2rem', height: '2rem', opacity: '0.5' }} />
                <TextField required fullWidth  label='Username' margin='normal' variant='standard' value={username.value} onChange={username.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }}  />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%', }} >
                <VisibilityIcon sx={{ color: 'white', mr: 1, my: 1, width: '2rem', height: '2rem', opacity: '0.5' }} />
                <TextField required fullWidth label='Password' margin='normal' variant='standard' type='password' value={password.value} onChange={password.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }} />
              </Box>
              <Button sx={{ marginTop: '1rem', width: '80%', fontFamily: 'Rubik Puddles' }} variant='contained' color='primary' type='submit ' fullWidth>Login</Button>

              <Typography color='white'>Or</Typography>
              <Button sx={{ marginTop: '1rem', fontFamily: 'Rubik Puddles', color:"white" }} onClick={toggleLogin} variant='text' color='secondary' fullWidth>Sign UP</Button>
            </form>
          </> : <>
            <Typography variant='h4' sx={{ fontFamily: "Rubik Puddles", borderBottom: '1px solid white ', color: 'white', marginTop: '1rem', '&:hover': { color: 'blue'  } }}>Sign Up</Typography>
            <form style={{
              width: '90%',
              marginTop: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
                flexDirection: 'column',
              height:'100%'
            }}
              onSubmit={handleSignup}
            >

              <Stack position={'relative'} margin={'auto'} width={'10rem'}
              >
                <Avatar sx={{
                  width: '8rem',
                  height: '8rem',
                  objectFit: 'contain'
                }}
                  src={avatar.preview}
                />
                <IconButton sx={{
                  position: 'absolute',
                  bottom: '0',
                  right: '1rem',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }

                }}
                  component='label'
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                  </>

                </IconButton>
              </Stack>
              {
                avatar.error && <Typography color='error' m={'1rem auto'} width={'fit-content'} display={'block'} variant='caption'>{avatar.error}</Typography>
              }
              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%' }} >
                <TextField required fullWidth label='Name' margin='normal' variant='standard' value={name.value} onChange={name.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }} />
              </Box>



              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%' }} >
                <TextField required fullWidth label='Email' margin='normal' variant='standard' type='email ' value={email.value} onChange={email.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }}/>
                </Box>
                {
                  email.error && <Typography  color='error'>{email.error}</Typography>
                }

              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%' }} >
                <TextField required fullWidth label='Username' margin='normal' variant='standard' value={username.value} onChange={username.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }}/>
              </Box>
              {
                username.error && <Typography color='error'>{username.error}</Typography>
              }


              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%', }} >
                <TextField required fullWidth label='Password' margin='normal' variant='standard' type='password' value={password.value} onChange={password.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }}/>
              </Box>
              {password.error && <Typography color='error'>{password.error}</Typography>}

              <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%', }} >
                <TextField required fullWidth label='Confirm Password' margin='normal' variant='standard' type='password' value={confirmPassword.value} onChange={confirmPassword.changeHandler} sx={{color: 'white ', label:{color:'white', fontSize:'10px' } }}/>
                </Box>
                {
                  confirmPassword.error && <Typography color='error'>{confirmPassword.error}</Typography>
                }

              <Button sx={{ marginTop: '1rem', fontFamily: 'Rubik Puddles', width:'70%' }} variant='contained' color='primary' type='submit' >Sign Up</Button>

              <Typography sx={{ fontFamily: 'Rubik Puddles', color:'white' }}>Or</Typography>
              <Button sx={{ marginTop: '0.5rem', fontFamily: 'Rubik Puddles' ,color:'white' }} onClick={toggleSignUp} variant='text' color='white' fullWidth>Login Instead</Button>

            </form>
          </>}

        </div>
      </Container>
    </div>
  )
}

export default Login