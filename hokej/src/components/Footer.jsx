import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Hokejové Mistrovství
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
