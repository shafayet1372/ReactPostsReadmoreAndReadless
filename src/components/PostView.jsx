import React from "react";
import SinglePost from "./SinglePost";
import { useState } from "react";
const substrRange = 200;
export default function PostView({ posts }) {
  let [readedIds, setReadIds] = useState([]);
  let isReaded = (id) => {
    return readedIds.some((x) => x == id);
  };

  let clickHandle = (e, id, type) => {
    e.preventDefault();
    if (type == "more") {
      setReadIds((p) => [...p, id]);
    } else if (type == "less") {
      setReadIds(readedIds.filter((x) => x != id));
    }
  };

  return (
    <div className="row ">
      {posts.map((x) => {
        return (
          <div key={x.id} className="col-md-12 col-sm-12 my-2 ">
            <SinglePost
              key={x.id}
              title={x.title}
              body={x.body}
              clickHandle={clickHandle}
              id={x.id}
              isReaded={isReaded(x.id)}
              substrRange={substrRange}
            />
          </div>
        );
      })}
    </div>
  );
}
