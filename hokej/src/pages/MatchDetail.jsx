import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchDetail } from '../redux/matchesSlice';
import { useParams } from 'react-router-dom';

const MatchDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const matchDetail = useSelector(state => state.matchDetail);

  useEffect(() => {
    dispatch(fetchMatchDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {matchDetail ? (
        <div>
          <h2>{matchDetail.title}</h2>
          <p>{matchDetail.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MatchDetail;
