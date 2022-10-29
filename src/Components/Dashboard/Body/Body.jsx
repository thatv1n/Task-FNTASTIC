import React from 'react';

import s from './Body.module.css';

import LeftBar from './LeftBar/LeftBar';

import DefPic from '../../../assets/image/defaultIcons/2363208-app-chat-discord-game-gamer-social_85471.png';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RedeemIcon from '@mui/icons-material/Redeem';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Body = ({ activeElement, setContact, contact }) => {
  const [activeChat, setActiveChat] = React.useState(0);

  const users = [
    { id: 4, name: 'Chpok47', status: 1 },
    { id: 5, name: 'GameMaster', status: 0 },
    { id: 6, name: 'Transformer', status: 0 },
  ];

  React.useEffect(() => {
    setActiveChat(contact);
  }, [contact]);

  const chats = [
    {
      userId: 4,
      messages: [
        {
          id: 0,
          name: 'Chpok47',
          mess: 'Hello, how are u?',
          date: '28.10.22',
          time: '12:40',
        },
        {
          id: 1,
          name: 'thatv1n',
          mess: 'Yo! im ok, and u?',
          date: '28.10.22',
          time: '12:42',
        },
        {
          id: 2,
          name: 'Chpok47',
          mess: 'i am fine, what do you think about this game?',
          date: '28.10.22',
          time: '12:43',
        },
        {
          id: 3,
          name: 'Chpok47',
          mess: 'this game The Day Before',
          date: '28.10.22',
          time: '12:45',
        },
        {
          id: 4,
          name: 'thatv1n',
          mess: 'i watched gameplay, this real cool, im wating this game)',
          date: '28.10.22',
          time: '12:47',
        },
        {
          id: 5,
          name: 'Chpok47',
          mess: 'Hello, how are u?',
          date: '28.10.22',
          time: '12:49',
        },
        {
          id: 6,
          name: 'thatv1n',
          mess: 'Yo! im ok, and u?',
          date: '28.10.22',
          time: '12:50',
        },
        {
          id: 7,
          name: 'Chpok47',
          mess: 'i am fine, what do you think about this game?',
          date: '28.10.22',
          time: '12:51',
        },
        {
          id: 8,
          name: 'Chpok47',
          mess: 'this game The Day Before',
          date: '28.10.22',
          time: '12:53',
        },
        {
          id: 9,
          name: 'thatv1n',
          mess: 'i watched gameplay, this real cool, im wating this game)',
          date: '28.10.22',
          time: '12:55',
        },
        {
          id: 10,
          name: 'Chpok47',
          mess: 'i am fine, what do you think about this game?',
          date: '28.10.22',
          time: '12:57',
        },
        {
          id: 11,
          name: 'Chpok47',
          mess: 'this game The Day Before',
          date: '28.10.22',
          time: '12:58',
        },
        {
          id: 12,
          name: 'thatv1n',
          mess: 'i watched gameplay, this real cool, im wating this game)',
          date: '28.10.22',
          time: '13:00',
        },
      ],
    },
    {
      userId: 5,
      messages: [
        {
          id: 0,
          name: 'GameMaster',
          mess: 'What kind of video games do you like?',
          date: '24.10.22',
          time: '12:40',
        },
        {
          id: 1,
          name: 'thatv1n',
          mess: 'None, they are for kids',
          date: '24.10.22',
          time: '12:42',
        },
        {
          id: 2,
          name: 'GameMaster',
          mess: 'That is not true, there are games for all ages',
          date: '24.10.22',
          time: '12:43',
        },
        {
          id: 3,
          name: 'GameMaster',
          mess: 'Really? I thought that they were all childish. ',
          date: '24.10.22',
          time: '12:45',
        },
        {
          id: 4,
          name: 'thatv1n',
          mess: 'Not at all, there are games that require a high level of intelligence.',
          date: '24.10.22',
          time: '12:47',
        },
        {
          id: 5,
          name: 'GameMaster',
          mess: 'That sounds like fun.',
          date: '24.10.22',
          time: '12:49',
        },
        {
          id: 6,
          name: 'thatv1n',
          mess: 'There are also games that are very artistic. ',
          date: '24.10.22',
          time: '12:50',
        },
        {
          id: 7,
          name: 'GameMaster',
          mess: 'That also interests me. ',
          date: '24.10.22',
          time: '12:51',
        },
        {
          id: 8,
          name: 'GameMaster',
          mess: ' I’ll write down some games for you to try, to see if you like them. ',
          date: '24.10.22',
          time: '12:53',
        },
        {
          id: 9,
          name: 'thatv1n',
          mess: 'I will try them out with an open mind.',
          date: '24.10.22',
          time: '12:55',
        },
        {
          id: 10,
          name: 'GameMaster',
          mess: 'i am fine, what do you think about this game?',
          date: '24.10.22',
          time: '12:57',
        },
        {
          id: 11,
          name: 'GameMaster',
          mess: 'this game The Day Before',
          date: '24.10.22',
          time: '12:58',
        },
        {
          id: 12,
          name: 'thatv1n',
          mess: 'i watched gameplay, this real cool, im wating this game)',
          date: '24.10.22',
          time: '13:00',
        },
      ],
    },
  ];

  const user = users?.filter((item) => item.id === contact);

  const viewMessages = chats
    .filter((item) => item.userId === activeChat)
    .map((message) =>
      message.messages.map((item) => {
        return (
          <div className={s.wrapMessage} key={item.id}>
            <div className={s.wrapImg}>
              <img src={DefPic} alt="ProfilePic" />
            </div>
            <div>
              <div className={s.titleMessage}>
                <div className={s.name}>{item.name}</div>
                <div className={s.date}>{item.date}</div>
              </div>
              <div>
                <div className={s.oneMessage}>
                  <div className={s.time}>{item.time}</div>
                  <div className={s.message}>{item.mess}</div>
                </div>
              </div>
            </div>
          </div>
        );
      }),
    );

  return (
    <div className={s.root}>
      <LeftBar
        activeElement={activeElement}
        setActiveChat={setActiveChat}
        setContact={setContact}
        contact={contact}
        activeChat={activeChat}
      />
      <div className={s.content}>{viewMessages}</div>
      <div className={s.formMessage}>
        <form action="">
          <div className={s.wrapInputSend}>
            <div className={s.input}>
              <div className={s.cirleIconInput}>
                <AddCircleIcon />
              </div>
              <textarea type="text" placeholder={`Write a message @${user[0]?.name}`} />
              <div className={s.groupButtonInp}>
                <div>
                  <RedeemIcon />
                </div>
                <div>
                  <GifBoxIcon />
                </div>
                <div>
                  <InsertDriveFileIcon />
                </div>
                <div>
                  <SentimentSatisfiedAltIcon />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
