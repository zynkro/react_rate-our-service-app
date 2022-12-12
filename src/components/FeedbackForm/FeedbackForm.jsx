import { useState } from 'react';

import Card from '../shared/Card/Card';
import './FeedbackForm.scss';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form className='feedback-form'>
        <h1 className='feedback-form__title'>
          How would you rate your service with us?
        </h1>
        <div className='feedback-form__input'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
