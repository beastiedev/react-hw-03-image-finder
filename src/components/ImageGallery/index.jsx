import React, { PureComponent } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

class ImageGallery extends PureComponent {
  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.gallery.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onGalleryItemClick={this.props.onGalleryItemClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};

export default ImageGallery;
