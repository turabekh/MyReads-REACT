import React from "react";
import BookList from "./BookList";

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.displayName}</h2>
        <div className="bookshelf-books">
          <BookList
            onBookUpdate={this.props.onBookUpdate}
            books={this.props.books.filter(
              b => b.shelf.toLowerCase() === this.props.shelf.name
            )}
          />
        </div>
      </div>
    );
  }
}

export default Shelf;
