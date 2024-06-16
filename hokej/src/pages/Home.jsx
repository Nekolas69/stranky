import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../redux/matchesSlice';
import MatchList from '../components/MatchList';

const Home = () => {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return (
    <div>
      <h1>Hokejové Zápasy</h1>
      <MatchList matches={matches} />
    </div>
  );
};

export default Home;
