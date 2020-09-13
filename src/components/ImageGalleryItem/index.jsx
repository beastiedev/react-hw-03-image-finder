import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={image.webformatURL} alt={image.id} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};

export default ImageGalleryItem;
