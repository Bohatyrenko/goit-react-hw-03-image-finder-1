import React, { Component } from 'react';
import s from '../Button/Button.module.css';

class Button extends Component {
  handleMoreLode = e => {
    console.log(this.props.fetchHits);
  };

  render() {
    return (
      <button type="button" onClick={this.handleMoreLode} className={s.Button}>
        Load more...
      </button>
    );
  }
}

export default Button;

// async function onLoadMore(e) {
//   loadMoreBtn.disable();
//   const result = await pixabayApiService.fetchArticles();
//   appendHitsMarkup(result);
//   loadMoreBtn.enable();

//   window.scrollTo({
//     top: e.pageY,
//     left: 0,
//     behavior: 'smooth',
//   });
// }
