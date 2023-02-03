import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <div className={css['no-feedaback']}>{message}</div>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
