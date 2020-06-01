import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "../components/Pagination";
import View from "../components/View";
import {
  API_HOST,
  API_POSTS,
  CURRENT_PAGE_KEY,
  POSTS_PER_PAGE,
} from "../utils/constants";
import { getLocalStorageItem } from "../utils/helper";

function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(getLocalStorageItem(CURRENT_PAGE_KEY)) || 1
  );

  useEffect(() => {
    const getPosts = async () => {
      axios.get(`${API_HOST}${API_POSTS}`).then((response) => {
        const data = response.data.sort((a, b) => (b.id > a.id ? 1 : -1));
        setPosts(data);
      });
    };
    getPosts();
  }, []);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  return (
    <View>
      <Posts data={posts.slice(start, end)} />
      <Pagination
        page={currentPage}
        hidePrevBtn={end >= posts.length}
        hideNextBtn={currentPage < 2}
        onClick={setCurrentPage}
      />
    </View>
  )

}

export default Home;