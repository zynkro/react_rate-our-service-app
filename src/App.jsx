import { useState } from 'react';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';

import feedbackData from './data/feedbackData';

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (confirm('Are you sure?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header title='Rate Our Service' />
      <div className='container'>
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
