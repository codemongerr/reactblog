import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Heading({ children, as, className }) {
  const classes = cn({
    [className]: className ? true : false
  });
  const Element = as;
  return <Element className={classes}>{children}</Element>;
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Heading.defaultProps = {
  as: 'h2'
}

export default Heading;