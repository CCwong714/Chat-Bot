import { Box, Stack } from '@mui/material';
import React, { Fragment } from 'react';
import { Chat_History } from '../../data';
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from './MsgTypes';
const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, index) => {
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} key={index} menu={menu} />;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMsg el={el} key={index} menu={menu} />;
                case 'doc':
                  return <DocMsg el={el} key={index} menu={menu} />;
                case 'link':
                  return <LinkMsg el={el} key={index} menu={menu} />;
                case 'reply':
                  return <ReplyMsg el={el} key={index} menu={menu} />;
                default:
                  return <TextMsg el={el} key={index} menu={menu} />;
              }
            default:
              return <Fragment key={index}></Fragment>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;