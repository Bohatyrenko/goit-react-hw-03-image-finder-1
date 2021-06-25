import React, { Component } from 'react';
import s from '../Searchbar/Searchbar.module.css';
import SearchForm from './SearchForm/SearchForm';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            value={this.state.query}
            onChange={this.handleChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
