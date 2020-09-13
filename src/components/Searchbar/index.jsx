import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    queryString: "",
  };

  handleInputChange = (e) => this.setState({ queryString: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      queryString: this.state.queryString,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
