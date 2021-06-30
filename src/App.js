import React, { Component } from 'react';
import photoApi from './servises/photoApi';

import './App.css';
import Loader from './components/Loader/Loader';
import shortid from 'shortid';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    modalAlt: '',
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

  onOpenModal = e => {
    this.setState({
      largeImageURL: e.target.dataset.source,
      modalAlt: e.target.attributes.alt.textContent,
    });
    this.toggleModal();
  };

  onCloseModal = e => {
    if (e.target.nodeName !== 'IMG') {
      this.toggleModal();
      this.setState({
        largeImageURL: '',
        modalAlt: '',
      });
    }
  };

  // handleImageClick = e => {

  //   this.toggleModal();
  //   this.setState({ largeImageURL: image });
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    console.log(this.state.showModal);
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
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector('#imageGallery').scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  render() {
    const { hits, isLoading } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    return (
      <div className="allCenter">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery hits={hits} onOpenModal={this.onOpenModal} />
        {isLoading && <Loader />}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchHits} />}
        {this.state.showModal && (
          <Modal
            image={this.state.largeImageURL}
            alt={this.state.modalAlt}
            onClose={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
