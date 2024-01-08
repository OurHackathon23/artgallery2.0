const min = 1;
const max = 1000000;
const uniqueRandomNumbers = [];

while (uniqueRandomNumbers.length < 25) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}

const imageBaseUrl = 'https://source.unsplash.com/random/';
const imageSize = '300x300';

const imageUrls = uniqueRandomNumbers.map(randomNumber =>' ${imageBaseUrl}${imageSize}?sig=${randomNumber}');