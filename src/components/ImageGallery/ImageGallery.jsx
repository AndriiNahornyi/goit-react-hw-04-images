import { Button } from '../Button';
import { Loader } from '../Loader';
import { ImageGalleryItem } from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleModal, isLoading, loadMore }) => {
  console.log('images :>> ', images);
  return (
    <>
      {images.length > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              toggleModal={toggleModal}
              url={image.webformatURL}
              largeImage={image.largeImageURL}
            />
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      <Button loadMore={loadMore} />
    </>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};
