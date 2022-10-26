import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    savedQuery: '',
  };
  handleSubmit = query => {
    this.setState({ savedQuery: query });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
        // <Components />
      >
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery query={this.state.savedQuery} />
        {/* <LoadMore LoadMore={ } /> */}
      </div>
    );
  }
}
