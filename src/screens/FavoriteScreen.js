import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import {HOTELS, TOP_PLACES} from '../data';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Favorite" />
      <View style={styles.views}>
        <ShowFavorite />
      </View>
    </View>
  );
};

class ShowFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: HOTELS,
      top_place: TOP_PLACES,
      fav: [],
    };
  }
  addToFavorite = id => {
    const data = this.state.hotel.find(item => item.id === id);
    this.setState({
      fav: [...this.state.fav, data],
    });
  };

  deleteToFavorite = id => {
    const toDelete = this.state.fav.filter(item => item.id !== id);
    this.setState({fav: toDelete});
  };

  render() {
    if (this.state.fav.length === 0) {
      return <Text>You don't have any favorite.</Text>;
    } else {
      return <Text>{this.state.fav.toString()}</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  views: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteScreen;
