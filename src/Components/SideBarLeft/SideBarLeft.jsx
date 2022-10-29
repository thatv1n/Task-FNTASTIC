import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import IconChannel from '../../assets/image/gamer_avatar_icon_133991.png';
import IconAnotherProfile from '../../assets/image/halloween42_109167.png';

import ExploreIcon from '@mui/icons-material/Explore';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import s from './SideBarLeft.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  border: 'none',
};

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 50,
    padding: '0 4px',
    border: '2px solid #202225',
    background: '#F04747',
  },
}));

const SideBarLeft = ({ setActiveElement, activeElement, setContact }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={s.root}>
      <div
        className={activeElement === 0 ? s.activeItemWrapper : s.itemWrapper}
        onClick={() => {
          setActiveElement(0);
          setContact(4);
        }}>
        <div className={activeElement === 0 ? s.activeItem : s.itemSideBarMain}>
          <svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" color="#fffff">
            <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
          </svg>
        </div>
      </div>

      <div
        className={activeElement === 1 ? s.activeItemWrapper : s.itemWrapper}
        onClick={() => {
          setActiveElement(1);
          setContact(1);
        }}>
        <StyledBadge badgeContent={4} color="secondary">
          <div className={activeElement === 1 ? s.activeItem : s.itemSideBarMain}>
            <Avatar alt="Remy Sharp" src={IconAnotherProfile} />
          </div>
        </StyledBadge>
      </div>

      <div className={s.line}></div>

      <div
        className={activeElement === 2 ? s.activeItemWrapper : s.itemWrapper}
        onClick={() => {
          setActiveElement(2);
          setContact(2);
        }}>
        <StyledBadge badgeContent={0} color="secondary">
          <div className={activeElement === 2 ? s.activeItem : s.itemSideBarMain}>
            <Avatar alt="Remy Sharp" src={IconChannel} />
          </div>
        </StyledBadge>
      </div>

      <div className={s.itemWrapperDef}>
        <div className={s.itemSideBarDef} onClick={handleOpen}>
          <AddIcon />
        </div>
      </div>

      <div className={s.itemWrapperDef}>
        <div className={s.itemSideBarDef} onClick={handleOpen}>
          <ExploreIcon />
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

export default SideBarLeft;
