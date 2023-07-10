import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './sidebar.module.scss';

function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    console.log('toggleCollapsed');
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <IconButton onClick={toggleCollapsed} aria-expanded={!collapsed}>
        <MenuIcon />
      </IconButton>
      {!collapsed
      && (
      <>
        <h1>Sidebar</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/calendar">Calendar</a>
            </li>
          </ul>
        </nav>
      </>
      )}
    </div>
  );
}

export default Sidebar;
