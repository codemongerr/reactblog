import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children,
    className,
    ...rest
  } = props;
  const classes = cn({
    'btn': true,
    [className]: className ? true : false
  });
  return <button className={classes} {...rest}>{children}</button>;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button'
}

export default Button;