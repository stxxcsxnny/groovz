import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import Table from '../../components/shared/Table';
import { Avatar, Stack } from '@mui/material';
import AvatarCard from '../../components/shared/AvatarCard';
import { dashboardData } from '../../constants/sampleData';
import { transformImage } from '../../lib/Features';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (<AvatarCard  avatar={params.row.avatar} />)
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300
  },
  {
    field: "totalMembers",
    headerName: "Total member",
    headerClassName: "table-header",
    width: 120
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 220,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center">
        <AvatarCard max={100} avatar={params.row.members} />
      </Stack>
    )
  },
  {
    field: "totalMessages",
    headerName: "Total message",
    headerClassName: "table-header",
    width: 120
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={'1rem'}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    )
  }
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(dashboardData.chats.map(chat => ({
      ...chat,
      id: chat._id,
      avatar: chat.avatar.map((chat)=> transformImage(chat, 50)), // Ensure avatar is correctly transformed
      members: chat.members.map((chat) => transformImage(chat.avatar, 50))
    })));
  }, []);

  return (
    <AdminLayout>
      <Table heading={'All Chats'} columns={columns} rows={rows} />
    </AdminLayout>
  );
}

export default ChatManagement;

