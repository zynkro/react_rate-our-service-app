import { motion, AnimatePresence } from 'framer-motion';

import { useContext } from 'react';
import FeedbackContext from '../../contexts/FeedbackContext';
import Spinner from '../shared/Spinner/Spinner';

import FeedbackItem from './../FeedbackItem/FeedbackItem';

const FeedbackList = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext);

  // Show 'No reviews yet' only when isLoading has finished ...
  // this state is true until it fetches data from the API
  if (isLoading === false && (!feedbacks || feedbacks.length === 0)) {
    return <p>No reviews yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={index} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
