import React, { Component } from 'react';
import s from '../Button/Button.module.css';

class Button extends Component {
  render() {
    return (
      <button type="button" className={s.Button}>
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
