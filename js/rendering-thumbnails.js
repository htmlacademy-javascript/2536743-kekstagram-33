import {getPhotos} from './data.js';

const photos = getPhotos();

const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const photoList = document.querySelector('.pictures');

const renderThumbnails = (photosArray) => {
  photosArray.forEach((photo) => {
    const newPhotoItem = templatePhoto.cloneNode(true);
    const pictureImg = newPhotoItem.querySelector('.picture__img');
    const pictureCommentsCount = newPhotoItem.querySelector('.picture__comments');
    const pictureLikesCount = newPhotoItem.querySelector('.picture__likes');

    pictureImg.src = photo.url;
    pictureImg.alt = photo.description;
    pictureCommentsCount.textContent = photo.comments.length;
    pictureLikesCount.textContent = photo.likes;

    fragment.append(newPhotoItem);
  });
};

renderThumbnails(photos);
photoList.append(fragment);
