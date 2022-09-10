import React from 'react';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
    return (
        <div className='leaveFeedback'>
            <h2 className='title'>Please Leave Feedback</h2>
            <div className='buttons'>
                <button type='button' onClick={goodFeedback}>Good</button>
                <button type='button' onClick={neutralFeedback}>Neutral</button>
                <button type='button' onClick={badFeedback}>Bad</button>
            </div>
      </div> 
   )
};

export default FeedbackOptions;