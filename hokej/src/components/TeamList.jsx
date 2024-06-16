import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const TeamList = ({ teams }) => {
  return (
    <List>
      {teams.map(team => (
        <ListItem key={team.id}>
          <ListItemText primary={team.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default TeamList;
