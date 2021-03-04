import React from "react";
import Shelf from "./Shelf";

class ShelfList extends React.Component {
  state = {
    categories: [
      { id: 1, name: "currentlyreading", displayName: "Currently Reading" },
      { id: 2, name: "wanttoread", displayName: "Want to Read" },
      { id: 3, name: "read", displayName: "Read" }
    ]
  };

  render() {
    return (
      <div>
        {this.state.categories.map(cat => (
          <Shelf
            key={cat.id}
            shelf={cat}
            books={this.props.books}
            onBookUpdate={this.props.onBookUpdate}
          />
        ))}
      </div>
    );
  }
}

export default ShelfList;
