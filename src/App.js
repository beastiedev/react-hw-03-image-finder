import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends Component {
  PIXABAY_API_KEY = "18287920-2c6b357e03b1c2c3350c52738";
  state = {
    gallery: [],
    queryString: "",
    page: 1,
    loading: false,
  };

  handleOnSubmitSearchbar = (e) => {
    e.preventDefault();
    console.log("handleOnSubmitSearchbar");
  };

  handleOnLoadMore = (e) => {
    e.preventDefault();
    console.log("handleOnLoadMore");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    this.setState(
      ({ page }) => ({
        page: page + 1,
      }),
      this.getGallery
    );
  };

  getGallery() {
    this.setState({ loading: true }, () => 
      axios
        .get(
          `https://pixabay.com/api/?q=${this.state.queryString}&page=${this.state.page}&key=${this.PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) =>
          this.setState(({ gallery }) => ({
            gallery: [...gallery, ...response.data.hits],
            loading: false,
          }))
        )
    );
  }

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  componentDidMount() {
    this.getGallery();
    // this.scrollDown();
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleOnSubmitSearchbar} />
        <ImageGallery gallery={this.state.gallery} />
        {this.state.loading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        <Button onLoadMore={this.handleOnLoadMore} />
      </div>
    );
  }
}

export default App;
