import PropTypes from 'prop-types';

/* https://react-icons.github.io/react-icons/icons?name=fa */
import { FaTimes } from 'react-icons/fa';

import Card from '../shared/Card/Card';

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={ () => handleDelete(feedback.id) } className="close">
        <FaTimes color="#ff6a95" />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem;
