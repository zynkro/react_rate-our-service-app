/* https://react-icons.github.io/react-icons/icons?name=fa */
import { FaTimes, FaEdit } from 'react-icons/fa';

import { useContext } from 'react';
import FeedbackContext from '../../contexts/FeedbackContext';

import Card from '../shared/Card/Card';

import './FeedbackItem.scss';

function FeedbackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='feedback-item__rating-number'>{feedback.rating}</div>
      <button
        onClick={() => deleteFeedback(feedback.id)}
        className='feedback-item__close-button'
      >
        <FaTimes color='purple' />
      </button>

      <button
        onClick={() => editFeedback(feedback)}
        className='feedback-item__edit-button'
      >
        <FaEdit color='violet' />
      </button>

      <div className='feedback-item__text'>{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
