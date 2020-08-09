import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { classnames } from '../../../utils/classNames';

class Input extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  constructor (props) {
    super(props);

    this.state = {
    };
  }

  onChange = event => {
    this.props.onChange(event);
  };

  render () {
    const { status } = this.state;
    const {
      id,
      type,
      name,
      value,
      placeholder,
      errorMessage,
      disabled
    } = this.props;
    
    const labelText = errorMessage || name;
    const inputStatus = errorMessage || value || status === 'active';

    const componentClass = classnames({
      input: true,
      'input--active': inputStatus,
      'input--error': errorMessage,
      'input--disabled': disabled
        });

    const inputComponent = 
      <input
        type={ type }
        name={ id }
        id={ id }
        placeholder={ placeholder }
        className="input__input"
        value={ value }
        onChange={ this.onChange }
      />

    return (
      <div className={ componentClass }>
        <label className="input__label">{ labelText }</label>

        { inputComponent }

      </div>
    );
  }
}

export default Input;
