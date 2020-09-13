import React, { Component } from "react";

class Modal extends Component {
  handleOnOverlayClick = () => {
    this.props.onCloseModal();
  };

  handleOnModalClick = (e) => {
    e.stopPropagation();
  };

  handleCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.handleOnOverlayClick}>
        <div className="Modal" onClick={this.handleOnModalClick}>
          <img src={this.props.image.largeImageURL} alt={this.props.image.id} />
        </div>
      </div>
    );
  }
}

export default Modal;
