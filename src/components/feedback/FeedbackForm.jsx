import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class FeedbackForm extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  static propsType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    };
    
   handleIncrementGood = () => {
    console.log('click +1');
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    };
    
    handleIncrementNeutral = () => {
    console.log('click +1');
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    };
     handleIncrementBad = () => {
    console.log('click +1');
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div className="">
        <FeedbackOptions
         
          goodFeedback={this.handleIncrementGood}
          neutralFeedback={this.handleIncrementNeutral}
          badFeedback={this.handleIncrementBad}
            />
            <Statistics
                goodCounter={this.state.good}
                neutralgoodCounter={this.state.neutral}
                badCounter={this.state.bad}
            />
      </div>
    );
  }
}
export default FeedbackForm;
