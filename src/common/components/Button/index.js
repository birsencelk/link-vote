import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classnames } from '../../../utils/classNames';

export class Button extends Component {

  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  render () {
    const buttonClass = classnames({
      btn: true,
      [this.props.className]: this.props.className
    });

    return (
      <button 
        className={ buttonClass } 
        onClick={ this.props.onClick || null }>
          { this.props.children }
      </button>
    );
  }
}