import {photoList} from './rendering-thumbnails.js';
import {toggleClass} from './util.js';
import {photoSet} from './data.js';
import {renderComments} from './rendering-comments';

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

const closeBigPicture = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(body, 'modal-open');
  toggleClass(socialCommentsLoader, 'hidden');
  document.removeEventListener('keydown', onDocumentCloseByEscape);
  bigPictureCloseButton.removeEventListener('click', onBigPictureClose);
};

function onBigPictureClose(evt) {
  evt.preventDefault();
  closeBigPicture();
}

// Использование функции перед объявлением. Спросить на созвоне

function onDocumentCloseByEscape(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

const onPhotoListShowBigPicture = (evt) => {
  const thumnnail = evt.target.closest('.picture');
  const id = thumnnail.dataset.id;

  if (thumnnail) {
    evt.preventDefault();
    toggleClass(bigPicture, 'hidden');
    toggleClass(body, 'modal-open');

    bigPictureImg.src = photoSet[id - 1].url;
    bigPictureImg.alt = photoSet[id - 1].description;
    socialCaption.textContent = photoSet[id - 1].description;
    likesCount.textContent = photoSet[id - 1].likes;

    const socialCommentTotal = photoSet[id - 1].comments.length;
    socialCommentTotalCount.textContent = socialCommentTotal;

    if (socialCommentTotal <= SOCIAL_COMMENT_SHOWN_COUNT) {
      socialCommentShownCount.textContent = socialCommentTotal;
      toggleClass(socialCommentsLoader, 'hidden');
    } else {
      socialCommentShownCount.textContent = SOCIAL_COMMENT_SHOWN_COUNT;
    }

    renderComments(id, photoSet, SOCIAL_COMMENT_SHOWN_COUNT, socialCommentTotal);


    bigPictureCloseButton.addEventListener('click', onBigPictureClose);
    document.addEventListener('keydown', onDocumentCloseByEscape);
  }
};

photoList.addEventListener('click', onPhotoListShowBigPicture);

renderComments();
