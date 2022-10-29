import React from 'react';
import Body from './Body/Body';

import s from './Dashboard.module.css';
import SubHeader from './SubHeader/SubHeader';

const Dashboard = ({ activeElement, contact, setContact }) => {
  return (
    <div className={s.root}>
      <SubHeader activeElement={activeElement} contact={contact} setContact={setContact} />
      <Body activeElement={activeElement} contact={contact} setContact={setContact} />
    </div>
  );
};

export default Dashboard;
