import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import AvatarCard from './AvatarCard';

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
    return (
        <Link
            style={{
                paddingTop: '1',
                textDecoration: 'none',
            }}
            to={`/chat/${_id}`}
            onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: sameSender ? '#16705b' : 'unset',
                    color: sameSender ? 'white' : 'white',
                    position: 'relative',
                }}
            >
                <AvatarCard avatar={avatar} />

                <Stack>
                    <Typography>
                        {name}
                    </Typography>
                    {
                        newMessageAlert && (
                            <Typography sx={{fontSize: '0.6rem', color: 'gray'}}>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>
                {
                    isOnline && <Box
                        sx={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'green',
                            position: 'absolute',
                            right: '1rem',
                            transform: 'translateY(-50%)',
                        }}
                    ></Box>
                }
            </div>
        </Link>
    );
}

export default memo(ChatItem);
