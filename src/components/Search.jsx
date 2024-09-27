import React, { Component } from "react";

class Search extends Component {
  handleChange = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Cari Catatan"
        value={this.props.search}
        onChange={this.handleChange}
        className="input input-bordered"
      />
    );
  }
}

export default Search;
