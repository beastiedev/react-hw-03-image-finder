import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";

class App extends Component {
  PIXABAY_API_KEY = "18287920-2c6b357e03b1c2c3350c52738";
  state = {
    gallery: [],
    queryString: "",
    page: 1,
    loading: false,
    modal: false,
    modalImage: {},
  };

  handleOnSubmitSearchbar = (search) => {
    this.setState(
      { gallery: [], page: 1, queryString: search.queryString },
      this.getGallery
    );
  };

  handleOnLoadMore = () => {
    this.setState(
      ({ page }) => ({
        page: page + 1,
      }),
      this.getGallery
    );
  };

  handleOnGalleryItemClick = (image) => {
    this.setState({ modal: true, modalImage: image });
  };

  handleOnCloseModal = () => {
    this.setState({ modal: false, modalImage: null });
  };

  getGallery() {
    // this.updateUrlQueryString();
    this.setState({ loading: true }, () =>
      axios
        .get(
          `https://pixabay.com/api/?q=${this.state.queryString}&page=${this.state.page}&key=${this.PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => {
          this.setState(({ gallery }) => ({
            gallery: this.setUniq([...gallery, ...response.data.hits]),
            loading: false,
          }));
        })
    );
  }

  setUniq(gallery) {
    return gallery.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
  }

  // scrollDown() {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }

  // updateUrlQueryString() {
  //   if (window.history.pushState) {
  //     const query = this.state.queryString
  //       ? "?search=" + this.state.queryString
  //       : "";
  //     const newurl =
  //       window.location.protocol +
  //       "//" +
  //       window.location.host +
  //       window.location.pathname +
  //       query;
  //     window.history.pushState({ path: newurl }, "", newurl);
  //   }
  // }

  // checkUrlQueryString(cb) {
  //   if (window.location.search) {
  //     const query = window.location.search.substring(1).split("=")[1];
  //     this.setState({ queryString: query }, cb);
  //   }
  // }

  componentDidMount() {
    // this.checkUrlQueryString(this.getGallery);
    this.getGallery();
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleOnSubmitSearchbar} />
        <ImageGallery
          gallery={this.state.gallery}
          onGalleryItemClick={this.handleOnGalleryItemClick}
        />
        {this.state.loading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        {!!this.state.gallery.length && (
          <Button onLoadMore={this.handleOnLoadMore} />
        )}
        {this.state.modal && this.state.modalImage && (
          <Modal
            onCloseModal={this.handleOnCloseModal}
            image={this.state.modalImage}
          />
        )}
      </div>
    );
  }
}

export default App;
