import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './matchesSlice';
import teamsReducer from './teamsSlice';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    teams: teamsReducer,
  },
});

export default store;
