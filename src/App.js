import React, { Component } from 'react';
import photoApi from './servises/photoApi';

import s from './components/Button/Button.module.css';

import shortid from 'shortid';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    this.setState({ isLoading: true });
    const { currentPage, searchQuery } = this.state;

    const options = {
      currentPage,
      searchQuery,
    };

    photoApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    return (
      <div>
        <h1>Ниже должны быть фотографии</h1>
        {/* {error && <h2>Houston, we have a problem...</h2>} */}
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && <h2>Loading Photo...</h2>}
        <ul>
          {hits.map(({ id, previewURL, tags }) => (
            <li key={id}>
              <img
                src={previewURL}
                alt={tags}
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
        </ul>
        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchHits} className={s.Button}>
            Load more...
          </button>
        )}
        {/* <Button onClick={this.fetchHits} /> */}
        {/* <Searchbar />
        <ImageGallery /> */}
      </div>
    );
  }
}

export default App;
