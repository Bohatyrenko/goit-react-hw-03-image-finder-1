import React, { Component } from 'react';
import axios from 'axios';

import shortid from 'shortid';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';

const API_KEY = '21301662-4ef0ce252e11badb1c1b3b876';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    hits: [],
    searchQuerry: '',
    currentPage: 1,
  };

  onChangeQuery = query => {
    const { currentPage } = this.state;
    axios
      .get(
        `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`,
      )
      .then(response => {
        this.setState({ hits: response.data.hits });
      });
  };

  render() {
    const { hits } = this.state;
    return (
      <div>
        <h1>Ниже должны быть фотографии</h1>
        <Searchbar onSubmit={this.onChangeQuery} />
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
        <Button />
        {/* <Searchbar />
        <ImageGallery /> */}
      </div>
    );
  }
}

export default App;
