import React from "react";
import AuthorList from "./AuthorList";
import BookTop from "./BookTop";

class BookCard extends React.Component {
  render() {
    const { book } = this.props;
    const authors =
      book && book.authors
        ? book.authors.map((a, i) => ({ id: i, name: a }))
        : [];
    return (
      <div className="book">
        <BookTop book={book} onBookUpdate={this.props.onBookUpdate} />
        <div className="book-title">{book.title}</div>
        <AuthorList authors={authors} />
      </div>
    );
  }
}

export default BookCard;
