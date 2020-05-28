import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Comment() {
  return (
    <div className="comments">
      <div className="card bg-transparent mt-2 border-bottom-0 border-left-0 border-right-0">
        <div className="card-body py-2">
          <Heading as="h6" className="card-title">
            @jacksparrow
          </Heading>
          <Text as="small" className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Text>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {};

export default Comment;
