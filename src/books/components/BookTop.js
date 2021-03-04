import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import { update } from "../../BooksAPI";

class BookTop extends React.Component {
  state = {
    value: this.props.book.shelf || "none"
  };

  handleChange = value => {
    this.setState(() => ({
      value: value
    }));
    update(this.props.book, value).then(res => {
      this.props.onBookUpdate(res);
    });
  };
  render() {
    const { book } = this.props;
    const url =
      book.imageLinks && book.imageLinks.smallThumbnail
        ? `url("${book.imageLinks.smallThumbnail}")`
        : "";
    return (
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: url
          }}
        />
        <BookShelfChanger
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BookTop;
