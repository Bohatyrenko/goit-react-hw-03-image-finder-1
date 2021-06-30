import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ hits, onOpenModal }) => {
  console.log(s);
  return (
    <ul id="imageGallery" className={s.ImageGallery}>
      <ImageGalleryItem hits={hits} onOpenModal={onOpenModal} />
    </ul>
  );
};

export default ImageGallery;
