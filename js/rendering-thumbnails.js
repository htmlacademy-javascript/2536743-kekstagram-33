const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const photoList = document.querySelector('.pictures');

const renderThumbnails = (photosArray) => {
  photosArray.forEach(({url, description, likes, comments}) => {
    const newPhotoItem = templatePhoto.cloneNode(true);
    const pictureImg = newPhotoItem.querySelector('.picture__img');

    pictureImg.src = url;
    pictureImg.alt = description;
    newPhotoItem.querySelector('.picture__comments').textContent = comments.length;
    newPhotoItem.querySelector('.picture__likes').textContent = likes;

    fragment.append(newPhotoItem);
  });
  photoList.append(fragment);
};

export {renderThumbnails};
