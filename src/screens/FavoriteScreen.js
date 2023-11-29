import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Favorite" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ShowFavorite />
      </View>
    </View>
  );
};

const ShowFavorite = props => {
  const [fav, Setfave] = useState(null);
  if (fav == null) {
    return <Text>You do not have any Favorite</Text>;
  } else {
    return <Text>You have favorite</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default FavoriteScreen;
