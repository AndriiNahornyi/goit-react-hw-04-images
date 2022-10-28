import { useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import css from './App.module.css';
export const App = () => {
  const [savedQuery, setSavedQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  //const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSubmit = query => {
    setSavedQuery(query);
  };
  const toggleModal = url => {
    setLargeImageURL(url);
  };
  return (
    <div className={css.App}>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery toggleModal={toggleModal} query={savedQuery} />
      {largeImageURL && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
};
