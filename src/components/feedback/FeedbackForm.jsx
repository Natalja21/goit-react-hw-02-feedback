import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Container from './Container';
import Notification from './Notification';

class FeedbackForm extends Component {
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

  addFeedback = option => {
   
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
 countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value)=> acc+value, 0)
   
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };
  
  render() {
    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />
        </Section>    
        <Section title='Statistics'>{this.countTotalFeedback() > 0 ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /> : <Notification message='There is no feedback'/>}
          
         </Section> 
      </Container>
    );
  }
}

export default FeedbackForm;
