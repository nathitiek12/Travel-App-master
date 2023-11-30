import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors, shadow, sizes} from '../../constants/theme';
import Icon from './Icon';
import {HOTELS, PLACES} from '../../data';

export const FAV = [];

const FavoriteButton = ({style, add, type}) => {
  const [hotel] = useState(HOTELS);
  const [place] = useState(PLACES);
  const [fav, setFav] = useState([]);

  const [active, SetActive] = useState(false);

  function addHotelToFave(id) {
    const data = hotel.find(item => item.id === id);
    setFav(...fav, data);
  }

  function addPlaceToFave(id) {
    const data = place.find(item => item.id === id);
    setFav(...fav, data);
  }

  function deleteToFavorite(id) {
    if (fav.length === 0) {
      setFav([]);
    }
    const data = fav.find(item => item.id !== id);
    setFav(data);
  }

  function setFavorite(id) {
    SetActive(!active);
    //if (active) {
    //if (type === 'HOTEL') {
    //addHotelToFave(id);
    //} else if (type === 'PLACE') {
    //addPlaceToFave(id);
    //} else {
    //setFav([]);
    //}
    //} else {
    //deleteToFavorite(id);
    //}
    //if (fav === undefined) {
    //setFav([]);
    //}
    //console.log(fav);
  }

  return (
    <Icon
      containerStyle={style}
      viewStyle={styles.view}
      onPress={() => setFavorite(add)}
      add={add}
      icon={active ? 'FavoriteFilled' : 'Favorite'}
      size={24}
      type={type}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
  },
});

export default FavoriteButton;
