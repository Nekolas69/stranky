import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch'; // MUI Switch component

const Header = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hokejové Mistrovství 2024
        </Typography>
        <Switch checked={darkMode} onChange={handleToggle} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
