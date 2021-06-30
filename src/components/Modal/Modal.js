import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose(e);
    }
  };
  render() {
    const { image, alt, onClose } = this.props;
    return (
      <div className={s.Overlay} onClick={onClose}>
        <div className={s.Modal}>
          <img src={image} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
