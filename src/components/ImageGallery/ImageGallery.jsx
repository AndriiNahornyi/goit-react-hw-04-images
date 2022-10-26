// Список карток зображень. Створює DOM-елемент наступної структури.
// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>

import { Component } from 'react';
// import { Searchbar } from 'components/Searchbar';
// import { Button } from 'components/Button';
// import { Modal } from 'components/Modal';
// import { Loader } from 'components/Loader';

import { getGalleryApi } from 'services/Api';
export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      const data = await getGalleryApi(this.props.query);
      this.setState({
        images: data.hits,
      });
    }
    if (prevState.page !== this.state.page) {
      // зробити запит на бекенд накшталт рядки 20-23, але з оновленою сторінкою
      const data = await getGalleryApi(this.props.query, this.state.page);
      console.log(data);

      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
      }));
      // this.setState({ page: this.state.page }); - не треба
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <ul className="gallery">
          {this.state.images.map(image => (
            <li key={image.id}>
              <img src={image.webformatURL} alt="littleImage" />
            </li>
          ))}
        </ul>
        <button onClick={this.loadMore} type="button">
          Load more
        </button>
      </>
    );
  }
}
