import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Text from "./Text";

function Post(props) {
  const { id, title, body, showComments } = props;
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
          <Link to={`/post/${id}`}>view comments</Link>
        </div>
      </div>
    </article>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  showComments: PropTypes.bool,
};

Post.defaultProps = {
  showComments: false,
};

export default Post;
