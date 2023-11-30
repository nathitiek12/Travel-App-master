import React, {useState, useTransition} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {colors, sizes, spacing} from '../../constants/theme';
import NotificationScreen from '../../screens/NotificationScreen';
import ProfileScreen from '../../screens/ProfileScreen';

export const SlideIn = ({children, startAnimation}) => {
  const transtionProperties = startAnimation
    ? {
        zIndex: 100,
        marginLeft: 0,
        opacity: 1,
      }
    : {
        marginLeft: sizes.width * -0.5,
        opacity: 0,
      };
  return <View style={transtionProperties}>{children}</View>;
};

const MainHeader = ({title}) => {
  const [transition, setTransition] = useState(false);

  const insets = useSafeAreaInsets();
  return (
    <>
      <SlideIn startAnimation={transition}>
        <ProfileScreen onPress={() => setTransition(false)} />
      </SlideIn>

      <View style={[styles.container, {marginTop: insets.top}]}>
        <Icon icon="Hamburger" onPress={() => setTransition(true)} />
        <Text style={styles.title}>{title}</Text>
        <Icon
          icon="Notification"
          onPress={() => {}}
          component={NotificationScreen}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    backgroundColor: colors.emerald,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.lime,
  },
});

export default MainHeader;
