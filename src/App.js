import React from 'react';

import './App.css';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CancelIcon from '@mui/icons-material/Cancel';
import SideBarLeft from './Components/SideBarLeft/SideBarLeft';

import Dashboard from './Components/Dashboard/Dashboard';

const colorElement = {
  color: '#a3a6aa',
};

function App() {
  const [activeElement, setActiveElement] = React.useState(0);
  const [contact, setContact] = React.useState(4);

  return (
    <div className="App">
      <div className="header">
        <div className="title">Vscord</div>
        <div className="control-app">
          <div className="collapse">
            <ExpandCircleDownIcon style={colorElement} />
          </div>
          <div className="resize-window">
            <WebAssetIcon style={colorElement} />
          </div>
          <div className="close-window">
            <CancelIcon style={colorElement} />
          </div>
        </div>
      </div>
      <div className="wrapperBody">
        <SideBarLeft
          activeElement={activeElement}
          setActiveElement={setActiveElement}
          setContact={setContact}
        />
        <Dashboard
          activeElement={activeElement}
          contact={contact}
          setContact={setContact}
          setActiveElement={setActiveElement}
        />
      </div>
    </div>
  );
}

export default App;
