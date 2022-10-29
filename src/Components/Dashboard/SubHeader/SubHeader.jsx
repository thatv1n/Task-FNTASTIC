import React from 'react';

import s from './SubHeader.module.css';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import PushPinIcon from '@mui/icons-material/PushPin';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const SubHeader = ({ activeElement, contact }) => {
  const inputRef = React.useRef();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const users = [
    { id: 4, name: 'Chpok47', status: 1 },
    { id: 5, name: 'GameMaster', status: 0 },
    { id: 6, name: 'Transformer', status: 0 },
  ];

  const userName = users.filter((item) => item.id === contact);

  return (
    <div className={s.root}>
      <div className={s.leftBar}>
        {activeElement === 0 && <button onClick={handleOpen}>Find or start a conversation</button>}
        {activeElement === 1 && <div>Game Center</div>}
        {activeElement === 2 && <div>Voice Center</div>}
      </div>
      <div className={s.centerBar}>
        <div className={s.nameChat}>
          {contact !== 1 && contact !== 2 ? `@ ${userName[0]?.name}` : ''}
          {contact === 1 && '# social'}
          {contact === 2 && '# center'}
        </div>
        <div className={s.groupButtonsCenter}>
          <div>
            <PhoneInTalkIcon />
          </div>
          <div>
            <VideocamIcon />
          </div>
          <div>
            <PushPinIcon />
          </div>
          <div>
            <PersonAddAlt1Icon />
          </div>
        </div>
      </div>
      <div className={s.rightBar}>
        <div className={s.search}>
          <input type="text" placeholder="Search" ref={inputRef} />
          <SearchIcon />
        </div>
        <div className={s.iconRightBar}>
          <InboxIcon />
        </div>
        <div className={s.iconRightBar}>
          <HelpIcon />
        </div>
      </div>
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
    </div>
  );
};

export default SubHeader;
