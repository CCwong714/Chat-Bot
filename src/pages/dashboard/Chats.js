import { faker } from '@faker-js/faker';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
  useTheme,
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../components/Search';
import ChatElement from '../../components/ChatElement';

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: 320,
        backgroundColor:
          theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background,

        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h5'>Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709CE6' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Stack
            spacing={2}
            direction='column'
            sx={{
              flexGrow: 1,
              overflow: 'scroll',
              maxHeight: 'calc(100vh - 200px)',
            }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={() => {}}>
              <Stack spacing={2.4}>
                <Typography variant='subtitle2' sx={{ color: '#676667' }}>
                  Pinned
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el, idx) => {
                  return <ChatElement key={idx} {...el} />;
                })}
                <Typography variant='subtitle2' sx={{ color: '#676667' }}>
                  All Chats
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                  return <ChatElement key={idx} {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
