import React from "react";

export default function({ authors }) {
  return (
    <div className="book-authors">
      {authors.map(a => (
        <div key={a.id}>{a.name}</div>
      ))}
    </div>
  );
}
