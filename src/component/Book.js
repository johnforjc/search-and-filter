import React from "react";

const Book = ({ book }) => {
  return (
    <a href={book.link}>
      <div className="row book-container mb-4 p-4">
        <div className="col-sm-4">
          <img className="book-img" src={book.imageLink} alt="" />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <h3 className="mb-3">{book.title}</h3>
          </div>
          <div className="row">
            <div className="col-5 fs-6">Author</div>
            <div className="col fs-6">: {book.author}</div>
          </div>
          <div className="row">
            <div className="col-5 fs-6">Language</div>
            <div className="col fs-6">: {book.language}</div>
          </div>
          <div className="row">
            <div className="col-5 fs-6">Year</div>
            <div className="col fs-6">: {book.year}</div>
          </div>
          <div className="row">
            <div className="col-5 fs-6">Number of page</div>
            <div className="col fs-6">: {book.pages}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Book;
