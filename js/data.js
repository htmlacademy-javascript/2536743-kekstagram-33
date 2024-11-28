import {getRandomInteger, createIdGenerator} from './util.js';

const generatePhotoId = createIdGenerator();
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const COUNT_PHOTO = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AVATAR_NAMES = [
  'Дима',
  'Петя',
  'Вася',
  'Егор',
  'Ольга',
  'Олег',
  'Кристина'
];

function Comment(num) {
  this.id = num;
  this.avatar = `img/avatar-${getRandomInteger(AVATAR_ID_MIN, AVATAR_ID_MAX)}.svg`;
  this.message = COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
  this.name = AVATAR_NAMES[getRandomInteger(0, AVATAR_NAMES.length - 1)];
}

const getComments = () => {
  const commentsCount = getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments[i] = new Comment(i + 1);
  }
  return comments;
};

function Photo() {
  this.id = generatePhotoId();
  this.url = `photos/${this.id}.jpg`;
  this.description = 'На этой фотографии изображено то, что я сфотографировал';
  this.likes = getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX);
  this.comments = getComments();
}

const getPhotos = () => {
  const photos = [];

  for (let i = 0; i < COUNT_PHOTO; i++) {
    photos[i] = new Photo();
  }
  return photos;
};

export {getPhotos};
