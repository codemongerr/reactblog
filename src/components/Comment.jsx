import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Text from './Text';

function Comment({ title, body }) {
  return (
    <div className="comments">
      <div className="card bg-transparent mt-2 border-bottom-0 border-left-0 border-right-0">
        <div className="card-body py-2">
          <Heading as="h6" className="card-title">
            {title}
          </Heading>
          <Text as="small" className="card-text">
            {body}
          </Text>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
