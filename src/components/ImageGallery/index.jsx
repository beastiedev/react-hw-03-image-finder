import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.gallery.map((image) => (
          <ImageGalleryItem key={image.id} image={image} />
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
