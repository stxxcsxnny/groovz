import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { } from '@mui/material';
import ChatList from '../specific/ChatList';
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

import '../CssStyles/appLayout.css'

const AppLayout = () => WrappedComponent => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupchat) => {
      // Handle delete chat
    };

    return (
      <>
            <Header />
            <div className='mainContainer' style={{
                
            }}>
      
          <div className='chatListContainer'
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              newMessagesAlert={[{
                chatId,
                count: 4,
              }]}
              onlineUsers={['1', '2']}
            />
          </div>
          <div
           className='chatContainer'
            
          
                          
      
          >
            <WrappedComponent {...props} />
          </div>
          <div
           className='profileContainer'
          >
            <Profile />
          </div>
            
                
                </div>
      </>
    );
  };
};

export default AppLayout;
