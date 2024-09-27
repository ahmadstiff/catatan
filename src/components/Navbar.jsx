import React from "react";
import Search from "./Search";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar bg-blue-600 mb-4 p-3">
        <div className="flex-1 justify-start ms-4">
          <a className="btn btn-ghost normal-case font-bold text-xl">
            Aplikasi Catatan
          </a>
        </div>
        <div className="flex-none">
          <Search search={this.props.search} onSearch={this.props.onSearch} />
        </div>
      </div>
    );
  }
}

export default Navbar;
