import React from 'react';
import './FeedbackStats.scss';

import { useContext } from 'react';
import FeedbackContext from '../../contexts/FeedbackContext';

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext);

  let averageRating =
    feedbacks.reduce((sum, curr) => (sum += curr.rating), 0) / feedbacks.length;

  averageRating = averageRating.toFixed(1).replace(/[,.]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
