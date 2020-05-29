import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {
  API_HOST,
  API_POSTS,
  CURRENT_PAGE_KEY,
  POSTS_PER_PAGE,
} from "./utils/constants";
import Heading from "./components/Heading";
import Pagination from "./components/Pagination";
import View from "./components/View";
import Posts from "./containers/Posts";
import Post from "./components/Post";
import { getLocalStorageItem } from "./utils/helper";
import "./assets/css/app.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(getLocalStorageItem(CURRENT_PAGE_KEY)) || 1
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      axios.get(`${API_HOST}${API_POSTS}`).then((response) => {
        setIsLoading(false);
        const data = response.data.sort((a, b) => (b.id > a.id ? 1 : -1));
        setPosts(data);
      });
    };
    getPosts();
  }, []);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  return (
    <Router>
      <View className="app">
        <View className="container">
          <View className="row">
            <View className="col-md-8 offset-md-2">
              <Switch>
                {!isLoading ? (
                  <Route exact path="/">
                    <Posts data={posts.slice(start, end)} />
                    <Pagination
                      page={currentPage}
                      hidePrevBtn={end >= posts.length}
                      hideNextBtn={currentPage < 2}
                      onClick={setCurrentPage}
                    />
                  </Route>
                ) : (
                  <Heading as="h3" className="my-5 text-center">
                    Loading...
                  </Heading>
                )}
                <Route exact path="/post/:id">
                  <Post {...posts.find((post) => post.id == 1)} />
                </Route>
              </Switch>
            </View>
          </View>
        </View>
      </View>
    </Router>
  );
}

export default App;
