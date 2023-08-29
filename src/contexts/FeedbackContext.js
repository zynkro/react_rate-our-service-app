import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

// `Provider` provides data to all of its children. Which data? Data passeed in via
// a single prop called `value` - object that can contain functions, variables etc.
export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      text: 'Nemo enim ipsam sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      rating: 7,
      id: 1,
    },
    {
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!',
      rating: 10,
      id: 2,
    },
    {
      text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur ...',
      rating: 8,
      id: 3,
    },
  ]);

  const [feedbackEditState, setFeedbackEditState] = useState({
    // Default state:
    //  - currently-edited item: empty object, but when edit-button is
    //    clicked on, I'm adding previous rating and text to this object
    feedback: {},
    editMode: false, // edit-mode when true
  });

  const [isLoading, setIsLoading] = useState(true);

  // Run only once when it loades - empty array of depenedencies
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    const response = await fetch('/feedbacks?_sort=id&_order=desc');
    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks([data, ...feedbacks]);
  };

  const deleteFeedback = async (id) => {
    if (confirm('Are you sure?')) {
      await fetch(`/feedbacks/${id}`, { method: 'DELETE' });
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

  // Used when feedbackEditState.editMode is true
  const updateFeedback = async (id, updatedFeedback) => {
    const response = await fetch(`/feedbacks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFeedback),
    });

    const data = await response.json();

    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id
          ? {
              ...feedback,
              ...data,
            }
          : feedback,
      ),
    );
  };

  return (
    // `Provider` allows all children access the given context directly
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEditState, // form needs to know about this state
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
