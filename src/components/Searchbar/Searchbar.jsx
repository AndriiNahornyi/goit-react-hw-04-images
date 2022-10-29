import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ handleSubmit }) => {
  const [value, setValue] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(event.target.query.value);
  };
  const onHandleChage = event => {
    setValue(event.target.value.trim());
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className="SearcFormButton">
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            name={'query'}
            onChange={onHandleChage}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
