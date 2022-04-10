import React from "react";
import style from "../style.module.css";
import ReadController from "./readController";
export default function SinglePost({
  title,
  body,
  clickHandle,
  id,
  isReaded,
  substrRange,
}) {
  let postBody = !isReaded
    ? body.repeat(5).substr(0, substrRange) + "......."
    : body.repeat(5);
  return (
    <div
      className={`${style.post} ${style.font} p-2   border-start border-5 border-primary`}
    >
      <p>{title}</p>
      <p>{postBody}</p>
      <ReadController
        title={isReaded ? "read less" : "read more"}
        clickHandle={clickHandle}
        id={id}
        isReaded={isReaded}
        substrRange={substrRange}
        type={isReaded ? "less" : "more"}
      />
    </div>
  );
}
