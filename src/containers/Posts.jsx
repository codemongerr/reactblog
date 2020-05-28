import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/Heading';
import Post from '../components/Post';

function Posts({ data }) {
  return (
    <Fragment>
      {(data && data.length) > 0 ? (
        data.map((post) => {
          return <Post {...post} key={post.id} />;
        })
      ) : (
        <Heading as="h3" className="my-5 text-center">No posts found</Heading>
      )}
    </Fragment>
  );
}

Posts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      userId: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired, 
      body: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Posts;
