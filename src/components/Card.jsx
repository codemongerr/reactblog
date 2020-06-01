import React from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";
import Text from "./Text";

const CardFooter = ({ children }) => {
  return (<div>{children}</div>);
};

function Card(props) {
  const { id, title, body, children } = props;
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
        {children}
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Card.Footer = CardFooter;

export default Card;
