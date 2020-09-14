import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";
import AppConfig from "./AppConfig";

class App extends Component {
  PIXABAY_API_KEY = AppConfig.PIXABAY_API_KEY;
  state = {
    gallery: [],
    queryString: "",
    page: 1,
    isLoading: false,
    isModal: false,
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
    this.setState({ isModal: true, modalImage: image });
  };

  handleOnCloseModal = () => {
    this.setState({ isModal: false, modalImage: null });
  };

  getGallery() {
    this.setState({ isLoading: true }, () =>
      axios
        .get(
          `https://pixabay.com/api/?q=${this.state.queryString}&page=${this.state.page}&key=${this.PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => {
          this.setState(({ gallery }) => ({
            gallery: this.setUniq([...gallery, ...response.data.hits]),
            isLoading: false,
          }));
        })
    );
  }

  setUniq(gallery) {
    return gallery.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
  }

  componentDidMount() {
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
        {this.state.isLoading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        {!!this.state.gallery.length && (
          <Button onClick={this.handleOnLoadMore} />
        )}
        {this.state.isModal && this.state.modalImage && (
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
