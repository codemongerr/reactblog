import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_HOST, API_POSTS } from "../utils/constants";
import Heading from "../components/Heading";
import Text from "../components/Text";
import View from "../components/View";

function Post() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      return false;
    }
    const getData = async () => {
      axios.get(`${API_HOST}${API_POSTS}/${id}`).then((response) => {
        setData(response.data);
      });
    };
    getData();
  }, [id]);
  return (
    <View>
      {data ? (
        <Text>fefefe</Text>
      ) : (
        <Heading as="h3" className="my-5 text-center">
          Loading...
        </Heading>
      )}
    </View>
  );
}

export default Post;
