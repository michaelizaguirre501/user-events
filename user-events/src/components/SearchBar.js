import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="searchBar ui segment">
        <form className="searchBarForm ui form" action="">
          <div className="field">
            <label>Image Search</label>
            <input
              placeholder="enter term here"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              className="searchBarInput"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
