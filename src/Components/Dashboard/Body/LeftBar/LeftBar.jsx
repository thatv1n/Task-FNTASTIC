import React from 'react';

import s from './LeftBar.module.css';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import defImg from '../../../../assets/image/defaultIcons/2363208-app-chat-discord-game-gamer-social_85471.png';
import Footer from './Footer/Footer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LeftBar = ({ activeElement, setActiveChat, setContact, contact, activeChat }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const users = [
    { id: 4, name: 'Chpok47', status: 1 },
    { id: 5, name: 'GameMaster', status: 0 },
    { id: 6, name: 'Transformer', status: 0 },
  ];

  React.useEffect(() => {
    return () => setChecked(0);
  }, []);

  const [checked, setChecked] = React.useState(0);

  const viewUsers = users.map((item, i) => {
    return (
      <div
        className={checked === i ? s.activeItemTopMess : s.itemTopMess}
        key={i}
        onClick={() => {
          setActiveChat(item.id);
          setContact(item.id);
          setChecked(i);
        }}>
        <div>
          <div className={item.status ? s.profileImg : s.profileImgOff}>
            <img src={defImg} alt="profile" />
          </div>
          <span>{item.name}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={s.root}>
      {activeElement === 0 && (
        <div className={s.wrapperContent}>
          <div className={s.itemsTop}>
            <div className={s.itemTop} onClick={handleOpen}>
              <PersonAddAlt1Icon />
              Friends
            </div>
            <div className={s.itemTop} onClick={handleOpen}>
              <AddToDriveIcon />
              Nitro
            </div>
          </div>
          <div className={s.personalMessages}>
            <span>PERSONAL MESSAGES</span> <AddIcon />
          </div>
          <div className={s.itemsTop}>{viewUsers}</div>
        </div>
      )}
      {activeElement === 1 && (
        <div>
          <div className={s.personalMessages} onClick={() => console.log('open')}>
            <div className={s.channelItemBar}>
              <ArrowForwardIosIcon />
              <span>TEXT CHANNELS</span>
            </div>
            <AddIcon />
          </div>
          <div className={s.subChanel}>
            <div># text</div>
            <div># music</div>
          </div>
          <div className={s.personalMessages} onClick={() => console.log('open')}>
            <div className={s.channelItemBar}>
              <ArrowForwardIosIcon />
              <span>VOICE CHANNELS</span>
            </div>
            <AddIcon />
          </div>
        </div>
      )}
      {activeElement === 2 && (
        <div>
          <div className={s.personalMessages} onClick={() => console.log('open')}>
            <div className={s.channelItemBar}>
              <ArrowForwardIosIcon />
              <span>TEXT CHANNELS</span>
            </div>
            <AddIcon />
          </div>
          <div className={s.subChanel}>
            <div># text</div>
            <div># music</div>
          </div>
          <div className={s.personalMessages} onClick={() => console.log('open')}>
            <div className={s.channelItemBar}>
              <ArrowForwardIosIcon />
              <span>VOICE CHANNELS</span>
            </div>
            <AddIcon />
          </div>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Footer />
    </div>
  );
};

export default LeftBar;
