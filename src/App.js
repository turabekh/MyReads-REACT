import React from "react";
import BooksPage from "./books/pages/BooksPage";
import SearchPage from "./books/pages/SearchPage";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class App extends React.Component {
  state = {
    books: [],
    query: "",
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState(() => ({
        books: [...data]
      }));
    });
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    return this.state.query;
  };

  handleChange = ({ target }) => {
    this.updateQuery(target.value);
    if (target.value.trim() !== "") {
      this.search(target.value);
    }
  };

  search = query => {
    const books = this.state.books;
    const currentlyReading = books
      .filter(b => b.shelf.toLowerCase() === "currentlyreading")
      .map(b => b.id);
    const read = books
      .filter(b => b.shelf.toLowerCase() === "read")
      .map(b => b.id);
    const wantToRead = books
      .filter(b => b.shelf.toLowerCase() === "wanttoread")
      .map(b => b.id);
    const shelf_books = this.getShelfBooks({
      currentlyReading,
      read,
      wantToRead
    });
    BooksAPI.search(query).then(data => {
      if (Array.isArray(data)) {
        data = data.map(d => {
          if (shelf_books.has(d.id)) {
            d.shelf = shelf_books.get(d.id);
          }
          return d;
        });
        this.setState(() => ({
          searchResults: [...data]
        }));
      } else {
        this.setState(() => ({
          searchResults: []
        }));
      }
    });
  };

  onBookUpdate = _books => {
    BooksAPI.getAll().then(data => {
      this.setState(() => ({
        books: [...data]
      }));
    });
  };

  getShelfBooks = books => {
    let shelf_books = new Map();
    for (let ob in books) {
      books[ob].forEach(b => {
        shelf_books.set(b, ob);
      });
    }
    return shelf_books;
  };

  onSearchBookUpdate = _books => {
    const shelf_books = this.getShelfBooks(_books);
    BooksAPI.search(this.state.query).then(data => {
      data = data.map(d => {
        if (shelf_books.has(d.id)) {
          d.shelf = shelf_books.get(d.id);
        }
        return d;
      });
      this.setState(() => ({
        searchResults: [...data]
      }));
      this.onBookUpdate(null);
    });
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BooksPage
                books={this.state.books}
                onBookUpdate={this.onBookUpdate}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                books={this.state.searchResults}
                search={this.search}
                onBookUpdate={this.onSearchBookUpdate}
                query={this.state.query}
                onChange={this.handleChange}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
