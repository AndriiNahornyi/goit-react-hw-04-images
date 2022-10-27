import { Component } from 'react';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { getGalleryApi } from 'services/Api';
import css from './ImageGallery.module.css';

import PropTypes from 'prop-types';
export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query && this.props.query !== '') {
      this.setState({ isLoading: true });
      const data = await getGalleryApi(this.props.query);
      this.setState({
        images: data.hits,
        //скинути кількість попередніх запитів
        page: 1,
        isLoading: false,
      });
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true });
      // запит на бекенд накшталт рядків 18-24, але з оновленою сторінкою
      const data = await getGalleryApi(this.props.query, this.state.page);
      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
        isLoading: false,
      }));
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className={css.ImageGallery}>
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              toggleModal={this.props.toggleModal}
              url={image.webformatURL}
              largeImage={image.largeImageURL}
            />
          ))}
        </ul>
        <Button loadMore={this.loadMore} />
      </>
    );
  }
}
ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
