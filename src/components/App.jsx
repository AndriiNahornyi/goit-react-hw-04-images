import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import css from './App.module.css';
import { getGalleryApi } from 'services/Api';
export const App = () => {
  const [savedQuery, setSavedQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (query, page = 1) => {
      try {
        setIsLoading(true);
        const data = await getGalleryApi(query, page);
        setImages(prev => [...prev, ...data.hits]);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (page > 1 && savedQuery) {
      getData(savedQuery, page);
    } else if (savedQuery) {
      setImages([]);
      getData(savedQuery);
    }
  }, [page, savedQuery]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleSubmit = query => {
    setSavedQuery(query);
    setPage(1);
  };
  const toggleModal = url => {
    setLargeImageURL(url);
  };

  return (
    <div className={css.App}>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery
        toggleModal={toggleModal}
        images={images}
        isLoading={isLoading}
        loadMore={loadMore}
      />
      {largeImageURL && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
};
