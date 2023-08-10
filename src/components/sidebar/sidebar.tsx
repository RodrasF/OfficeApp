import React from 'react';
import {
  PanelLeftExpand28Regular,
  PanelLeftContract28Regular,
  Home28Regular,
  CalendarLtr28Regular,
  HeartCircleHint28Regular,
} from '@fluentui/react-icons';
import styles from './sidebar.module.scss';

function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <h2>Rodrigo Frazão</h2>
            <span>Software Engineer</span>
          </div>
        </div>
        <div className={styles.expandCollapseButton}>
          {collapsed
            && <PanelLeftExpand28Regular onClick={toggleCollapsed} aria-label="Expand" />}
          {!collapsed
            && <PanelLeftContract28Regular onClick={toggleCollapsed} aria-label="Collapse" />}
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <Home28Regular />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/status">
              <HeartCircleHint28Regular />
              <span>Status</span>
            </a>
          </li>
          <li>
            <a href="/calendar">
              <CalendarLtr28Regular />
              <span>Calendar</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
