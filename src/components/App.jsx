import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import css from './App.module.css';
export class App extends Component {
  state = {
    savedQuery: '',
    largeImageURL: '',
    isOpenModal: false,
  };
  handleSubmit = query => {
    this.setState({ savedQuery: query });
  };
  toggleModal = url => {
    this.setState({
      largeImageURL: url,
    });
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery
          toggleModal={this.toggleModal}
          query={this.state.savedQuery}
        />
        {this.state.largeImageURL && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}
