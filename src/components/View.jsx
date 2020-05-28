import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function View({ children, as, className }) {
  const classes = cn({
    [className]: className ? true : false
  });
  const Element = as;
  return <Element className={classes}>{children}</Element>;
}

View.propTypes = {
  as: PropTypes.oneOf(['div', 'section', 'article', 'header', 'footer']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

View.defaultProps = {
  as: 'div'
}

export default View;