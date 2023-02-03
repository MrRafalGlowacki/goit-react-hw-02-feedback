import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  static defaultProps = {
    percentage: 1,
  };
  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    return (
      <>
        <h2 className={css.title}>{this.props.statisticsTitle}</h2>
        <ul className={css.stat}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  statisticsTitle: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
