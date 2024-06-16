import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
  const response = await axios.get('API_ENDPOINT_FOR_TEAMS');
  return response.data;
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default teamsSlice.reducer;
