import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchBar ui segment">
        <form className="searchBarForm ui form" onSubmit={this.onFormSubmit}>
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
