import { Button } from '../Button';
import { Loader } from '../Loader';
import { ImageGalleryItem } from '../ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleModal, isLoading, loadMore }) => {
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
