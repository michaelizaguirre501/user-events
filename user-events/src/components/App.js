import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const results = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID l_Qlp27UJu1it51J7vz4kF7nRnJF2GlRpnXNGIdlqOA",
      },
    });
    let array = results.data.results.map((x) => x.urls.regular);
    return array;
  }
  render() {
    return (
      <div className="ui container mt" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {console.log("ok")}
        {/*here */}
      </div>
    );
  }
}

export default App;
