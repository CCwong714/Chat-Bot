import { Box, Button, Stack, useTheme } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import Chats from './Chats';
import Conversation from '../../components/Conversation';
import Contact from '../../components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import SharedMessages from '../../components/SharedMessages';
import { UpdateSidebarType } from '../../redux/slices/app';
import StarredMessage from '../../components/StarredMessage';

// import Cat from "../../components/Cat";

const Cat = lazy(() => import('../../components/Cat'));

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.default,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>

      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case 'CONTACT':
              return <Contact />;
            case 'STARRED':
              return <StarredMessage />;
            case 'SHARED':
              return <SharedMessages />;
            default:
              // return (
              //   <Button onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
              //     1234
              //   </Button>
              // );
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
