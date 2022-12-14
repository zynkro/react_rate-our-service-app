import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

// `Provider` provides data to all of its children. Which data? Data passeed in via
// a single prop called `value` - object that can contain functions, variables etc.
export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 5,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7,
    },
  ]);

  const [feedbackEditState, setFeedbackEditState] = useState({
    // Default state:
    //  - currently-edited item: empty object, but when edit-button is
    //    clicked on, I'm adding previous rating and text to this object
    feedback: {},
    editMode: false, // edit-mode when true
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (confirm('Are you sure?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  // Triggered via edit button, which activates editMode, and moves the given
  // feedback to `feedbackEditState`, which is then used by `updateFeedback`
  const editFeedback = (feedback) => {
    setFeedbackEditState({
      feedback,
      editMode: true,
    });
  };
  return (
    // Via `Provider`, all children will have access to the given context
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEditState, // form needs to know about this state
        addFeedback,
        deleteFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
