import React from "react";

export default function readController({
  title,
  id,
  clickHandle,
  isReaded,
  type,
}) {
  return (
    <a
      href=""
      onClick={(e) => clickHandle(e, id, type)}
      className={`${isReaded ? "text-success" : "text-info"} page-link fw-bold`}
    >
      {title}
    </a>
  );
}
