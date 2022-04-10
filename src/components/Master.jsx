import React from "react";
import { useEffect, useState } from "react";
import PostView from "./PostView";
export default function Master() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 8));
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="container ">
      <h1 className="text-center bg-info fw-bold border-start border-end border-5 border-warning">
        Read More And Less
      </h1>
      <PostView posts={posts} />
    </div>
  );
}
