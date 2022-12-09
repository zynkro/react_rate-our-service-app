import { useState } from 'react';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';

import feedbackData from './data/feedbackData';

function App() {
  const [feedbacks, setFeedbacks ] = useState(feedbackData);

  return (
    <>
      <Header title='Rate Our Service' />
      <div className='container'>
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
