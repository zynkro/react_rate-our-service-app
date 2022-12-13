import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FeedbackProvider } from './contexts/FeedbackContext';

import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import AboutPage from './components/pages/AboutPage/AboutPage';
import AboutIconLink from './components/AboutIconLink/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header title='Rate Our Service' />

        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
