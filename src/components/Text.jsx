import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Text({ children, as, className }) {
  const classes = cn({
    [className]: className ? true : false
  });
  const Element = as;
  return <Element className={classes}>{children}</Element>;
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'strong', 'span', 'small']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Text.defaultProps = {
  as: 'p'
}

export default Text;