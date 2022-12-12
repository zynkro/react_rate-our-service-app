import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from './../FeedbackItem/FeedbackItem';

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={index}
              feedback={feedback}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
