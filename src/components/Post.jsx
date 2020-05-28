import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Heading from './Heading';
import Text from './Text';

function Post(props) {
  const { id, title, body } = props;
  return (
    <article className="card bg-transparent my-5">
      <div className="card-body">
        <header>
          <Heading className="card-title">{title}</Heading>
        </header>
        <div>
          <Text>
            <Text as="strong">#{id}</Text> {body}
          </Text>
        </div>
        <div>
          <Link 
            href="#" 
            className="btn-link" 
            onClick={(e) => {e.preventDefault()}}
          >
            view comments
          </Link>
        </div>
      </div>
      {/* <footer className="card-footer">
      comments component goes here
      </footer> */}
    </article>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
