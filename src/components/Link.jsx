import React from 'react';
import PropTypes from 'prop-types';

function Link({ children, className, href, target, onClick }) {
  return (
    <a href={href} className={className} target={target} onClick={onClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  onClick: PropTypes.func,
};

export default Link;
