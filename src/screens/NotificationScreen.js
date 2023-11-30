/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Notifications" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default NotificationScreen;
