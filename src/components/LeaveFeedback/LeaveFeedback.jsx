import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './LeaveFeedback.module.css';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class LeaveFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    goodBtn: 'Good',
    badBtn: 'Bad',
  };

  addFeedbackGood = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };
  addFeedbackNeautral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };
  addFeedbackBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };
  goodBtnChange = () => {
    this.setState({ goodBtn: ':)' });
  };
  goodBtnChangeBack = () => {
    this.setState({ goodBtn: 'Good' });
  };
  badBtnChange = () => {
    this.setState({ badBtn: ':(' });
  };
  badBtnChangeBack = () => {
    this.setState({ badBtn: 'Bad' });
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage =
      this.countTotalFeedback() === 0
        ? 0
        : (this.state.good / this.countTotalFeedback()) * 100;
    return Number(percentage.toFixed(2));
  };
  render() {
    return (
      <div className={css.container}>
        <h1>{this.props.feedbackTitle}</h1>
        <ul className={css.list}>
          <li>
            <button
              onMouseOver={this.goodBtnChange}
              onMouseOut={this.goodBtnChangeBack}
              onClick={this.addFeedbackGood}
              className={`${css.good} ${css.btn}`}
            >
              {this.state.goodBtn}
            </button>
          </li>
          <li>
            <button
              onClick={this.addFeedbackNeautral}
              className={`${css.neutral} ${css.btn}`}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              onMouseOver={this.badBtnChange}
              onMouseOut={this.badBtnChangeBack}
              onClick={this.addFeedbackBad}
              className={`${css.bad} ${css.btn}`}
            >
              {this.state.badBtn}
            </button>
          </li>
        </ul>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            statisticsTitle={this.props.statisticsTitle}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

LeaveFeedback.propTypes = {
  statisticsTitle: PropTypes.string,
  feedbackTitle: PropTypes.string,
};
