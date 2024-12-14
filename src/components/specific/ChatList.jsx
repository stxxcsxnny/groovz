import { Stack } from '@mui/material';
import React from 'react';
import ChatItem from '../shared/ChatItem';

const ChatList = ({w='100%', chats=[], chatId, onlineUsers=[], newMessagesAlert=[{chatId: '', count: 0}], handleDeleteChat}) => {
  return (
    <Stack width={w} direction={'column'} overflow={'auto'} height={'100%'} sx={{scrollbarWidth:'none'}}>
      {
        chats?.map((data, index) => {
          const { avatar, name, _id, groupChat, members } = data;
          const newMessageAlert = newMessagesAlert.find(alert => alert.chatId === _id);
          
          const isOnline = members?.some(member => onlineUsers.includes(member._id));
          
          return (
            <ChatItem 
              index={index} 
              sameSender={chatId === _id} 
              newMessageAlert={newMessageAlert} 
              isOnline={isOnline} 
              avatar={avatar} 
              name={name} 
              _id={_id} 
              key={_id} 
              groupChat={groupChat} 
              members={members} 
              chatId={chatId} 
              handleDeleteChat={handleDeleteChat} 
            />
          );
        })
      }
    </Stack>
  );
}

export default ChatList;
