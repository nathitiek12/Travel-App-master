const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../../assets/images/users/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../../assets/images/users/35.jpeg'),
  },
};


const REVIEWS = {
  1: {
    id: 1,
    date: '21 May, 2022',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 July, 2021',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: 'Sheraton',
    image: require('../../assets/images/hotels/sheraton-damascus-pool.jpg'),
    location: 'Syria, Damascus',
    rating: 9,
    pricePeerDay: '130$',
    type: 'HOTEL',
  },
  2: {
    id: 2,
    title: 'Sultan Cave Suites',
    image: require('../../assets/images/hotels/talisman_syria.jpeg'),
    location: 'Syria, Damascus',
    rating: 9.3,
    pricePeerDay: '230$',
    type: 'HOTEL',
  },
  3: {
    id: 3,
    title: 'Balquee Hotel',
    image: require('../../assets/images/hotels/balquee.jpeg'),
    location: 'Yemen, Marib',
    rating: 8.4,
    pricePeerDay: '280$',
    type: 'HOTEL',
  },
  4: {
    id: 4,
    title: 'Bilqis Hotel',
    image: require('../../assets/images/hotels/belquis.jpeg'),
    location: 'Yemen, Marib',
    rating: 9.3,
    pricePeerDay: '190$',
    type: 'HOTEL',
  },
  5: {
    id: 5,
    title: "Serena Hotel",
    image: require('../../assets/images/hotels/serena_kabul.jpg'),
    location: 'Afghanistan, Kabul',
    rating: 9.2,
    pricePeerDay: '250$',
    type: 'HOTEL',
  },
 
  6: {
    id: 6,
    title: 'Caracus Palace Hotel',
    image: require('../../assets/images/hotels/caracas-palace-hotel.jpg'),
    location: 'Venezuela, Caracus',
    rating: 9.2,
    pricePeerDay: '210$',
    type: 'HOTEL',
  },
  7: {
    id: 7,
    title: 'Tamanaco Intercontinental Hotel',
    image: require('../../assets/images/hotels/caracus_tamanaco.jpg'),
    location: 'Venezuela, Caracus',
    rating: 9.4,
    pricePeerDay: '430$',
    type: 'HOTEL',
  },
  8: {
    id: 8,
    title: 'Ryugyong Hotel',
    image: require('../../assets/images/hotels/koreahotelry.jpg'),
    location: 'North Korea, Pyongyang',
    rating: 9.2,
    pricePeerDay: '330$',
    type: 'HOTEL',
  },
  9: {
    id: 9,
    title: 'Sun City Resort',
    image: require('../../assets/images/hotels/suncityresortafrica.jpg'),
    location: 'South Africa, Cape Town',
    rating: 9.4,
    pricePeerDay: '350$',
    type: 'HOTEL',
  },
  10: {
    id: 10,
    title: 'Corinthia Hotel',
    image: require('../../assets/images/hotels/Corinthia_Hotel_Tripoli_Libya.png'),
    location: 'Libya, Tripoli',
    rating: 9.2,
    pricePeerDay: '230$',
    type: 'HOTEL',
  },
  11: {
    id: 11,
    title: 'Al-Mansour',
    image: require('../../assets/images/hotels/al-mansour.jpeg'),
    location: 'Iraq, Baghdad',
    rating: 9.4,
    pricePeerDay: '120$',
    type: 'HOTEL',
  },

  12: {
    id: 12,
    title: 'Konansou',
    image: require('../../assets/images/hotels/indura-beach-golf-resort.png'),
    location: 'Honduras, Tegucigalpa',
    rating: 9.2,
    pricePeerDay: '740$',
    type: 'HOTEL',
  },

};

export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/images/trips/syria.png'),
    title: 'Damascus',
    location: 'Syria',
    description:
      'Ongoing conflict since 2011, leading to widespread instability, violence, and a humanitarian crisis.',
    rating: 7,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[1], HOTELS[2]],
    type: 'PLACE',
  },
  {
    id: 4,
    image: require('../../assets/images/trips/yemen.png'),
    title: 'Marib',
    location: 'Yemen',
    description:
      'Ongoing conflict with a complex humanitarian crisis, including food and medical shortages.',
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[3], HOTELS[4]],
    type: 'PLACE',
  },
  {
    id: 6,
    image: require('../../assets/images/trips/kabul.jpg'),
    title: 'Kabul',
    location: 'Afghanistan',
    description:
      "Ongoing security challenges due to political instability, insurgency, and terrorism.",
    rating: 9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[5]],
    type: 'PLACE',
  },
  {
    id: 8,
    image: require('../../assets/images/trips/vene.png'),
    title: 'Caracus',
    location: 'Venezuela',
    description:
      "High crime rates, including street crime and armed robberies in some neighborhoods.",
    rating: 9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[6], HOTELS[7]],
    type: 'PLACE',
  },
  {
    id: 9,
    image: require('../../assets/images/trips/capetown.jpg'),
    title: 'Cape Town',
    location: 'South Africa',
    description:
      "Higher crime rates, including incidents of robbery and assault in specific urban areas.",
    rating: 8.4,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[9]],
    type: 'PLACE',
  },
];

export const PLACES = [
  {
    id: 5,
    image: require('../../assets/images/trips/koea.png'),
    title: 'Pyongyang',
    location: 'North Korea',
    description:
      "Restricted access for foreigners, limited diplomatic relations, and strict government control.",
    rating: 9.2,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[8]],
    type: 'PLACE',
  },
  {
    id: 2,
    image: require('../../assets/images/trips/libya.jpg'),
    title: 'Tripoli',
    location: 'Libya',
    description:
      'Ongoing political instability, security concerns, and occasional outbreaks of violence.',
    rating: 7.1,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[10]],
    type: 'PLACE',
  },
  {
    id: 3,
    image: require('../../assets/images/trips/iraq.png'),
    title: 'Baghdad',
    location: 'Iraq',
    description:
      'Ongoing security challenges due to political instability and the presence of armed groups.',
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[11]],
    type: 'PLACE',
  },

  {
    id: 7,
    image: require('../../assets/images/trips/hondurus.png'),
    title: 'Tegucigalpa',
    location: 'Honduras',
    description:
      'High crime rates, including gang-related violence and robbery.',
    rating: 9.2,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[12]],
    type: 'PLACE',
  },
];

export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
