import React from 'react';
import PropTypes from 'prop-types';

import FeedbackItem from './../FeedbackItem/FeedbackItem';

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedbacks.map((feedback, index) => (
        <FeedbackItem
          key={index}
          feedback={feedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
};

export default FeedbackList;
