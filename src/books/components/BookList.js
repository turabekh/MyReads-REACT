import React from "react";
import BookCard from "./BookCard";

class BookList extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(b => (
          <li key={b.id}>
            <BookCard book={b} onBookUpdate={this.props.onBookUpdate} />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookList;
