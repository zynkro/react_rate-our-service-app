
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';

import feedbackData from './data/feedbackData';

function App() {
  return <h1>Beginning</h1>;
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
