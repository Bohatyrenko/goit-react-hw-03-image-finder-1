import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ hits, onOpenModal }) => (
  <>
    {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li key={id}>
        <img
          src={webformatURL}
          alt={tags}
          data-source={largeImageURL}
          className={s.ImageGalleryItemImage}
          onClick={onOpenModal}
        />
      </li>
    ))}
  </>
);
export default ImageGalleryItem;
