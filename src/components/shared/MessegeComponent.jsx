import { Box, Typography } from '@mui/material';
import React from 'react';
import { memo } from 'react';
import moment from 'moment';
import { fileFormat } from '../../lib/Features';
import RenderComponent from './RenderComponent';
import AvatarCard from './AvatarCard';

const MessegeComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === !user?._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div style={{ display: 'flex', flexDirection: sameSender ? 'row-reverse' : 'row', alignItems: 'flex-start', margin: '10px 0' }}>
      {!sameSender && <AvatarCard avatar={sender.avatar} />}
      <div
        style={{
          color: 'white',
          backgroundColor: sameSender ? '#7df7ce' : '#438770',
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: sameSender ? 'flex-end' : 'flex-start',
        }}
      >
        {!sameSender && <Typography fontWeight={'400'}>{sender.name}</Typography>}
        {content && <Typography>{content}</Typography>}
        {attachments.length > 0 &&
          attachments.map((attachment, index) => {
            const url = attachment.url;
            const file = fileFormat(url);
            return (
              <Box key={index}>
                <a
                  href={url}
                  target='_blank'
                  download
                  style={{ color: 'white' }}
                >
                  <RenderComponent file={file} url={url} />
                </a>
              </Box>
            );
          })}
        <Typography fontSize={'0.5rem'} variant='caption'>
          {timeAgo}
        </Typography>
      </div>
    </div>
  );
};

export default memo(MessegeComponent);
