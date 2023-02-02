import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <>
        <h2>{this.props.statisticsTitle}</h2>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </>
    );
  }
}

Statistics.propTypes = {
  statisticsTitle: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
