import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_HOST, API_POSTS, API_COMMENTS } from "../utils/constants";
import Card from "../components/Card";
import Heading from "../components/Heading";
import View from "../components/View";
import Comment from "../components/Comment";

function Post() {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      axios.get(`${API_HOST}${API_POSTS}/${id}`).then((response) => {
        setData(response.data);
      });
    };
    getData();
  }, []);
  useEffect(() => {
    const getComments = async () => {
      axios.get(`${API_HOST}${API_COMMENTS}`, {
        params: {
          postId: id
        }
      }).then((response) => {
        setComments(response.data);
      });
    };
    getComments();
  }, []);
  return (
    <View>
      {data ? (
        <View>
          <Card {...data} key={data.id}>
            <Card.Footer>
              {comments.length > 0 ? (
                comments.map(comment => {
                  return (
                    <Comment 
                      key={comment.id} 
                      title={`@${comment.email}`} 
                      body={comment.body} 
                    />
                  )
                })
              ) : (
                <Heading as="h6" className="my-5 text-center">
                  no comments on this post
                </Heading>
              )}
            </Card.Footer>
          </Card>
          <Link to="/" className="btn btn-outline-primary rounded-pill mb-3">&#8592; Go back</Link>
        </View>
      ) : (
        <Heading as="h3" className="my-5 text-center">
          Loading...
        </Heading>
      )}
    </View>
  );
}

export default Post;
