import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper, Stack, Typography ,Box} from '@mui/material'
import { AdminPanelSettings, Group, Message, NotificationAddSharp, Notifications, Person } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField,  } from '../../components/styles/StyledComponents'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'

const Dashboard = () => {
    const Appbar = <Paper
        elevation={3}
        sx={{
            padding: '2rem',
            margin: '3rem 0',
            borderRadius: '10px',



        }}
    >
        <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}> 
       <AdminPanelSettings sx={{ fontSize: '3rem' }} />
           <SearchField placeholder='search...'/>
           <CurveButton >Search</CurveButton>
            <Box flexGrow={1} />
            <Typography fontSize={'.7rem'}
            
                sx={{  display: { xs: 'none', md: 'block' },}}
            >
                {
                    moment().format('MMMM Do YYYY, h:mm:ss a')
                }
            </Typography>
            <Notifications/>


        </Stack>
    </Paper>
    const widgets = <Stack direction={{
        xs: 'column',
        sm: 'row',
    }}
        justifyContent={'center'}
        alignItems={'center'}
        marginRight={'2rem'}
    >

        <Widget title={'Chats'} value={'100'}Icon={<Person/>} />

        <Widget title={'Users'} value={'100'}Icon={<Group />} />
<Widget      title={'Messeges'} value={'100'}Icon={<Message />} />
    </Stack>
  return (
      <AdminLayout sx={{scrollbarWidth:"none"}} >
          <Container component={'main'} sx={{scrollbarWidth:"none"}}>
              {
                  Appbar
              }

              <Stack  spacing={'2rem'} flexWrap={'wrap'} direction={{ xs: 'column', lg: 'row' }} justifyContent={'center'} alignItems={{xs: 'center', lg: 'stretch'}} backgroundColor={''} sx={{scrollbarWidth:"none"}}>
 
                  <Paper
                      elevation={5}
                      sx={{
                          padding: '2rem 3.5rem',
                          borderRadius: '10px',
                          width: { xs: '100%', sm: '75%', md: '50%' },
                          backgroundColor: '#1c1c1c',
                          color: 'white',
                          maxWidth: '45rem',
                          height: '20rem',
                          margin: '1rem 0',
                          
                      }}
                  >
                      <Typography >Last Messages</Typography>
                      {
                          <LineChart/>
                      }
                  </Paper>
                  <Paper
                      sx={{
                          padding: '1rem',
                          margin: 'rem 0',
                          borderRadius: '10px',
                          width:'100%',
                           
                          width: { xs: '100%', sm: '500%' },
                          backgroundColor: '#1c1c1c',
                          display: 'flex',
                          justifyContent: 'center',
                         alignItems: 'center',
                          maxWidth: '25rem',
                          position: 'relative',
                          height: '20rem',
                         
                      }}
                  
                     
                  >
                       {
                      <DoughnutChart/>
                      }
                      
                      <Stack position={'absolute'}
                          direction={'row'}
                          justifyContent={'center' }
                          alignItems={'center'}
                          spacing={'1rem'}
                          width={'100%'}
                          height={'100%'}
                        
                      >
                          <Group sx={{color: 'white'}} /><Typography sx={{color: 'white'}}>Vs</Typography>
                          <Person sx={{color: 'white'}}/>
                      </Stack>
                  </Paper>
                 
                  

              </Stack>
                                {
                      widgets
                  }
          </Container>
    </AdminLayout>
  )
}
const Widget = ({ title, value, Icon }) => <Paper

    elevation={3}
    sx={{
        padding: ' 2rem',
        borderRadius: '1.5rem',
        width: '15rem',
        backgroundColor: '#1c1c1c',
        margin: '1rem ',
        height: '10rem',
        
        
    
}}
>

    <Stack alignItems={'center'} spacing={'1rem'}>

        <Typography
        
            sx={
                {
                    color: 'white',
                    borderRadius: '50%',
                    border: '5px solid white',
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        
        >{value}</Typography>
        <Stack direction={'row'} alignItems={'center'} spacing={'1rem'} sx={{color: 'white'}}>
            {Icon}
        
        <Typography sx={{color: 'white'}}>{title}</Typography>
        </Stack>
    </Stack>
</Paper>

export default Dashboard