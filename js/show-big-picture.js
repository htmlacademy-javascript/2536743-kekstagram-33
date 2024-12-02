import {photoList} from './rendering-thumbnails.js';
import {photoSet} from './data.js';
import {socialComments, renderComments} from './rendering-comments';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialCommentShownCount = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsLoader = bigPicture.querySelector('.social__comments-loader');

const SOCIAL_COMMENT_SHOWN_COUNT = 5;

// функция закрытия окна с большой фотографией

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentCloseByEscape);
};

// обработчик клика на кнопку "закрыть" в виде крестика

function onBigPictureClose(evt) {
  evt.preventDefault();
  closeBigPicture();
}

// вешаем обработчик на кнопку "закрыть" в виде крестика

bigPictureCloseButton.addEventListener('click', onBigPictureClose);

// обработчик при нажатии клавиши escape

function onDocumentCloseByEscape(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

const onPhotoListShowBigPicture = (evt) => {
  const thumnnail = evt.target.closest('.picture');
  const id = thumnnail.dataset.id;
  bigPicture.dataset.id = id; //для последующего использования при выводе следующих комментариев

  if (thumnnail) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    bigPictureImg.src = photoSet[id - 1].url;
    bigPictureImg.alt = photoSet[id - 1].description;
    socialCaption.textContent = photoSet[id - 1].description;
    likesCount.textContent = photoSet[id - 1].likes;

    const socialCommentTotal = photoSet[id - 1].comments.length;
    socialCommentTotalCount.textContent = socialCommentTotal;

    if (socialCommentTotal <= SOCIAL_COMMENT_SHOWN_COUNT) {
      socialCommentShownCount.textContent = socialCommentTotal;
      socialCommentsLoader.classList.add('hidden');
    } else {
      socialCommentShownCount.textContent = SOCIAL_COMMENT_SHOWN_COUNT;
    }

    socialComments.innerHTML = '';

    renderComments(id, photoSet, SOCIAL_COMMENT_SHOWN_COUNT, socialCommentTotal, SOCIAL_COMMENT_SHOWN_COUNT);

    document.addEventListener('keydown', onDocumentCloseByEscape);

  }
};

photoList.addEventListener('click', onPhotoListShowBigPicture);

const onsocialCommentsLoaderClick = () => {
  const id = bigPicture.dataset.id;
  let countShown = +socialCommentShownCount.textContent + SOCIAL_COMMENT_SHOWN_COUNT;
  const countTotal = +socialCommentTotalCount.textContent;

  if (countTotal <= countShown) {
    countShown = countTotal;
    socialCommentsLoader.classList.add('hidden');
    socialCommentShownCount.textContent = countTotal;
  } else {
    socialCommentShownCount.textContent = countShown;
  }

  renderComments(id, photoSet, countShown, countTotal, SOCIAL_COMMENT_SHOWN_COUNT);

};

socialCommentsLoader.addEventListener('click', onsocialCommentsLoaderClick);

export {photoSet};
