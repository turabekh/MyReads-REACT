import React from "react";

class BookShelfChanger extends React.Component {
  state = {
    value: ""
  };

  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.value} onChange={e => this.handleChange(e)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
