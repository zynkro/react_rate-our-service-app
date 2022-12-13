import { motion, AnimatePresence } from 'framer-motion';

import { useContext } from 'react';
import FeedbackContext from '../../contexts/FeedbackContext';

import FeedbackItem from './../FeedbackItem/FeedbackItem';

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

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
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
