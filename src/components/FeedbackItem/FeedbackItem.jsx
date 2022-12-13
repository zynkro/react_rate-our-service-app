import PropTypes from 'prop-types';

/* https://react-icons.github.io/react-icons/icons?name=fa */
import { FaTimes } from 'react-icons/fa';

import Card from '../shared/Card/Card';

import './FeedbackItem.scss';

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card>
      <div className='feedback-item__rating-number'>{feedback.rating}</div>
      <button
        onClick={() => handleDelete(feedback.id)}
        className='feedback-item__close-button'
      >
        <FaTimes color='#ff6a95' />
      </button>
      <div className='feedback-item__text'>{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
