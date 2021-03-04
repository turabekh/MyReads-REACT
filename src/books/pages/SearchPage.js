import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";

class SearchPage extends React.Component {
  render() {
    const { query, books } = this.props;
    const searchResults = query.trim() !== "" ? books : [];
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              onChange={e => this.props.onChange(e)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={searchResults}
            onBookUpdate={this.props.onBookUpdate}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
