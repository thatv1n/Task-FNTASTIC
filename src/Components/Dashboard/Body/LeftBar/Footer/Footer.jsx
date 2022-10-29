import React from 'react';

import s from './Footer.module.css';

import ProfilePic from '../../../../../assets/image/icons8-бот-100.png';

import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';

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

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isMicOff, setIsMicOff] = React.useState(false);
  const [isHeadPhoneOff, setIsHeadPhoneOff] = React.useState(false);

  return (
    <div className={s.root}>
      <div className={s.profile}>
        <div className={s.profileImg}>
          <img src={ProfilePic} alt="profile" />
        </div>
        <div>
          <span>thatv1n</span>
          <span>#8700</span>
        </div>
      </div>
      <div className={s.settingProfile}>
        <div onClick={() => setIsMicOff(!isMicOff)}>{isMicOff ? <MicOffIcon /> : <MicIcon />}</div>
        <div onClick={() => setIsHeadPhoneOff(!isHeadPhoneOff)}>
          {isHeadPhoneOff ? <HeadsetOffIcon /> : <HeadphonesIcon />}
        </div>
        <div onClick={handleOpen}>
          <SettingsIcon />
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

export default Footer;
