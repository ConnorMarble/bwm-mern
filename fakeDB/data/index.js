const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const image1Id = mongoose.Types.ObjectId();
const image2Id = mongoose.Types.ObjectId();
const image3Id = mongoose.Types.ObjectId();
const image4Id = mongoose.Types.ObjectId();
const image5Id = mongoose.Types.ObjectId();
const image6Id = mongoose.Types.ObjectId();

exports.images = [
  {
    _id: image1Id,
    cloudinaryId: 'image1_k7kb7l',
    url:
      'https://res.cloudinary.com/bookwithme/image/upload/v1580492304/image1_k7kb7l.jpg',
  },
  {
    _id: image2Id,
    cloudinaryId: 'image2_dlqi4o',
    url:
      'https://res.cloudinary.com/bookwithme/image/upload/v1580492304/image2_dlqi4o.jpg',
  },
  {
    _id: image3Id,
    cloudinaryId: 'image3_agfjva',
    url:
      'https://res.cloudinary.com/bookwithme/image/upload/v1580492304/image3_agfjva.jpg',
  },
  {
    _id: image4Id,
    cloudinaryId: '3433220491_s0pl4p',
    url:
      'https://res.cloudinary.com/instaclone-mernstack/image/upload/v1608229206/3433220491_s0pl4p.jpg',
  },
  {
    _id: image5Id,
    cloudinaryId: 'cabin_ga2hn7',
    url:
      'https://res.cloudinary.com/instaclone-mernstack/image/upload/v1608228681/cabin_ga2hn7.webp',
  },
  {
    _id: image6Id,
    cloudinaryId: 'mt_isjuwc',
    url:
      'https://res.cloudinary.com/instaclone-mernstack/image/upload/v1608228682/mt_isjuwc.jpg',
  },
];

exports.users = [
  {
    _id: user1Id,
    username: 'Test User',
    email: 'test@gmail.com',
    password: 'testtest',
  },
  {
    _id: user2Id,
    username: 'Test User2',
    email: 'test2@gmail.com',
    password: 'testtest2',
  },
];

exports.rentals = [
  {
    title: 'Nice view on ocean',
    city: 'San Francisco',
    street: 'Main street',
    category: 'condo',
    image: image1Id,
    numOfRooms: 4,
    shared: true,
    description: 'Very nice apartment in center of the city.',
    dailyPrice: 43,
    owner: user1Id,
  },
  {
    title: 'Modern apartment in center',
    city: 'New York',
    street: 'Time Square',
    category: 'apartment',
    image: image2Id,
    numOfRooms: 1,
    shared: false,
    description: 'Very nice apartment in center of the city.',
    dailyPrice: 11,
    owner: user1Id,
  },
  {
    title: 'Old house in nature',
    city: 'Bratislava',
    street: 'Letna 7',
    category: 'house',
    image: image3Id,
    numOfRooms: 5,
    shared: true,
    description: 'Very nice apartment in center of the city.',
    dailyPrice: 23,
    owner: user2Id,
  },
  {
    title: 'Beach house (New Build)',
    city: 'Miami',
    street: 'Collons Ave',
    category: 'house',
    image: image4Id,
    numOfRooms: 3,
    shared: true,
    description: 'New construction. Beautiful ocean front property.',
    dailyPrice: 29,
    owner: user2Id,
  },
  {
    title: 'Cabin in the woods',
    city: 'Asheville',
    street: 'Merrimon Ave',
    category: 'house',
    image: image5Id,
    numOfRooms: 5,
    shared: true,
    description:
      'Situated on a picture-perfect, six-acre property at the head of a valley, just below where the rocky creek rushes down the mountain, This cabin offers a compelling contrast of history and modern luxury.',
    dailyPrice: 83,
    owner: user2Id,
  },
  {
    title: 'Blissful Nature/House',
    city: 'Atlanta',
    street: 'Shannon Dr NE',
    category: 'house',
    image: image6Id,
    numOfRooms: 5,
    shared: false,
    description:
      'Main house in a quiet residential area, easy access to interstate 575 and 75. Just 20 miles from downtown Atlanta.',
    dailyPrice: 35,
    owner: user2Id,
  },
];
