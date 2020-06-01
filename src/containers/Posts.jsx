import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Heading from '../components/Heading';
import Card from '../components/Card';

function Posts({ data }) {
  return (
    <Fragment>
      {(data && data.length) > 0 ? (
        data.map((post) => {
          return (
            <Card {...post} key={post.id}>
              <Card.Footer>
                <Link to={`/post/${post.id}`}>view comments</Link>
              </Card.Footer>
            </Card>
          );
        })
      ) : (
        <Heading as="h3" className="my-5 text-center">Loading...</Heading>
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
