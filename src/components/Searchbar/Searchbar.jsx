// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
// Створює DOM - елемент наступної структури.
// <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>
//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.onSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.handleChange}
              // value={}
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
