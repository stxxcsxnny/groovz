import { Add, Delete, Done, Edit, KeyboardArrowLeft, Menu } from "@mui/icons-material";
import {
  Box,
  Dialog,
  Drawer,
  
  IconButton,
  Stack,
  Tooltip,
  Typography,
  TextField,
  Button
} from "@mui/material";
import React, { memo, useState, useEffect, lazy, Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import UserItem from "../components/shared/UserItem";



import '../components/CssStyles/groups.css'

const ConfirmDeleteDialog = lazy(() => import("../components/dialog/ConfirmDeleteDialog"));

const Groups = () => {
  const navigate = useNavigate();
  const chatId = useSearchParams()[0].get("group");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdateValue, setGroupNameUpdateValue] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (chatId) {
      setGroupName(`group name ${chatId}`);
      setGroupNameUpdateValue(`group name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdateValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const NavigateBack = () => {
    navigate(-1);
  };

  const handleMenuClose = () => {
    navigate(0);
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdateValue);
  };

  const OpenConfirmDeleteHandler = () => {
    setConfirmDelete(true);
    console.log("delete");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDelete(false);
  };

  const openAddMemberHandler = () => {
    console.log("add member");
  };

  const deleteHandler = () => {
    console.log("delete");
    closeConfirmDeleteHandler();
  };

  const removeMemberHandler = (id) => {
    console.log(id);
  };

  const GroupName = (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={'1rem'} padding={'2rem'}>
      {isEdit ? (
        <Dialog open>
          <Stack p={'2rem'} direction={'column'} width={'25rem'}>
            <TextField value={groupNameUpdateValue} onChange={(e) => setGroupNameUpdateValue(e.target.value)} />
            <IconButton onClick={updateGroupName}>
              <Done />
            </IconButton>
          </Stack>
        </Dialog>
      ) : (
        <>
          <Typography variant="h5" color="white">{groupName}</Typography>
          <IconButton  onClick={() => setIsEdit(true)}>
            <Edit sx={{ color: "white" }} />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={'1rem'}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
      m={'10px'}
    >
      <Button size="large" variant="outlined" color="error" startIcon={<Delete />} onClick={OpenConfirmDeleteHandler}>
        Delete Group
      </Button>
      <Button size="large" variant="contained" startIcon={<Add />} onClick={openAddMemberHandler}>
        Add Member
      </Button>
    </Stack>
  );

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "white",
              color: "black",
            },
          }}
          onClick={handleMobile}
        >
          <Menu />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "white",
              color: "black",
            },
          }}
          onClick={NavigateBack}
        >
          <KeyboardArrowLeft />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <div className="groupContainer">
      <div
          className="group-list"
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </div>
      <div
       
        className="group"
      >
        {IconBtns}
        {groupName && <>
          {GroupName}
          <Typography margin={'2rem'} alignSelf={'flex-start'} variant="body1" color="white">Members</Typography>
          <Stack
            maxWidth={'45rem'}
            width={{xs: "100%", sm: "100%", md: "45rem"}}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "2rem",
              md: "1rem 4rem",
            }}
            spacing={"2rem"}
            bgcolor={"#16705b"}
            borderRadius={"1rem"}
            maxHeight={'50vh'}
            overflow={'auto'}
          >
            {sampleUsers.map((user) => (
              <UserItem user={user} key={user._id} isAdded style={{boxShadow: '0 0 0 0.1rem  rgba(0, 0, 0, 0.5)',  padding:'1rem 2rem',borderRadius:'1rem'}} handler={removeMemberHandler} />
            ))}
          </Stack>
          {ButtonGroup}
        </>}
      </div>

      {confirmDelete && <Suspense fallback={<div>Loading...</div>}><ConfirmDeleteDialog open={confirmDelete} onClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} /></Suspense>}

      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
       
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </div>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}  direction={'column'} overflow={'auto'} height={'100%'} sx={{scrollbarWidth:'none' ,borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(0,0,0,0.2)', background:'#72e7c0'}}>
      
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link to={`?group=${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault(); }}>
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
        <AvatarCard avatar={avatar} />
        <Typography sx={{ marginLeft: { xs: '1rem', sm: '10rem' } }}>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
