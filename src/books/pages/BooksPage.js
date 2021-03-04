import React from "react";
import Header from "../components/Header";
import ShelfList from "../components/ShelfList";
import { Link } from "react-router-dom";

class BooksPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <ShelfList
            books={this.props.books}
            onBookUpdate={this.props.onBookUpdate}
          />
        </div>
        <div className="open-search">
          <Link className="add-book-btn" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;
