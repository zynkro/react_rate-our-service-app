import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

import feedbackData from './data/feedbackData';

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (confirm('Are you sure?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header title='Rate Our Service' />

      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
