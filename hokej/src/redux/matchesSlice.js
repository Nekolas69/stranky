import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
  const response = await axios.get('API_ENDPOINT_FOR_MATCHES');
  return response.data;
});

export const fetchMatchDetail = createAsyncThunk('matches/fetchMatchDetail', async (id) => {
  const response = await axios.get(`API_ENDPOINT_FOR_MATCH_DETAIL/${id}`);
  return response.data;
});

const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    matches: [],
    matchDetail: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMatchDetail.fulfilled, (state, action) => {
        state.matchDetail = action.payload;
      });
  }
});

export default matchesSlice.reducer;
