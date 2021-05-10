import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="book-collection">
      {books.map((book, index) => (
        <Book key={index} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
