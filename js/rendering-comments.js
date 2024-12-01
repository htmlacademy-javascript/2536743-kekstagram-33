const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');
const fragmentSocialComments = document.createDocumentFragment();

const renderComments = (id, photoSet, countShown, countTotal) => {
  const count = countTotal <= countShown ? countTotal : countShown;

  socialComments.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const commentItem = socialComment.cloneNode(true);
    const socialPicture = commentItem.querySelector('.social__picture');
    const socialText = commentItem.querySelector('.social__text');

    socialPicture.src = photoSet[id - 1].comments[i].avatar;
    socialPicture.alt = photoSet[id - 1].comments[i].name;
    socialText.textContent = photoSet[id - 1].comments[i].message;

    fragmentSocialComments.append(commentItem);
  }

  socialComments.append(fragmentSocialComments);
};

export {renderComments};
