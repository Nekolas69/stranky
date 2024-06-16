import React from 'react';
import { useSelector } from 'react-redux';
import MatchList from '../components/MatchList';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Oblíbené Zápasy</h1>
      <MatchList matches={favorites} />
    </div>
  );
};

export default Favorites;
