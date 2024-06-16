import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../redux/teamsSlice';
import TeamList from '../components/TeamList';

const TeamStats = () => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div>
      <h1>Statistiky Týmů</h1>
      <TeamList teams={teams} />
    </div>
  );
};

export default TeamStats;
