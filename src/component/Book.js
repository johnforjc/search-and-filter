import React from "react";

const Book = ({ book }) => {
  return (
    <a href={book.link}>
      <div className="row book-container mb-4 p-4">
        <div className="col-4">
          <img src="" alt="" />
        </div>
        <div className="col-8">
          <div className="row">
            <h3>{book.title}</h3>
          </div>
          <div className="row">
            <div className="col fs-6">Author: {book.author}</div>
            <div className="col-3 fs-6">Year: {book.year}</div>
          </div>
          <div className="row">
            <div className="col fs-6">Language: {book.language}</div>
            <div className="col-3 fs-6">Pages: {book.pages}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Book;
