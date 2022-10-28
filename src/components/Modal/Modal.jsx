import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', keyClose);
    return () => {
      document.removeEventListener('keydown', keyClose);
    };
    // eslint-disable-next-line
  }, []);

  // componentDidMount() {
  //   document.addEventListener('keydown', this.keyClose);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.keyClose);
  // }

  const keyClose = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  const overlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div onClick={overlayClick} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
