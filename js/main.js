const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePhotoId = createIdGenerator();
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

const Comment = function(num) {
  this.id = num;
  this.avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
  this.message = COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
  this.name = AVATAR_NAMES[getRandomInteger(0, AVATAR_NAMES.length - 1)];
};

const getComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments[i] = new Comment(i + 1);
  }
  return comments;
};

const Photo = function() {
  this.id = generatePhotoId();
  this.url = `photos/${this.id}.jpg`;
  this.description = 'На этой фотографии изображено то, что я сфотографировал';
  this.likes = getRandomInteger(15, 200);
  this.comments = getComments();
};

const getPhotos = (count) => {
  const photos = [];

  for (let i = 0; i < count; i++) {
    photos[i] = new Photo();
  }
  return photos;
};

console.log(getPhotos(COUNT_PHOTO));

