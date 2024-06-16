import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@mui/material';

const MatchList = () => {
  const matches = useSelector((state) => state.matches.matches);
  const status = useSelector((state) => state.matches.status);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (!Array.isArray(matches) || matches.length === 0) {
    return <Typography variant="body1">No matches available.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5">Matches</Typography>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <Typography variant="body1">
              {match.team1} vs {match.team2}
            </Typography>
            <Typography variant="body2">Date: {match.date}</Typography>
            <Typography variant="body2">Venue: {match.venue}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
