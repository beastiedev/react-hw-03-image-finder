import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, onGalleryItemClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onGalleryItemClick(image)}>
      <img
        src={image.webformatURL}
        alt={image.id}
        className="ImageGalleryItem-image"
      />
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
