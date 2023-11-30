/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/shared/Icon';
import {USERS} from '../data';

const ProfileScreen = ({onPress}) => {
    const [id,setId] = useState(1);

    function ChangeID() {
        if (id === 1) {setId(2);}
        else {setId(1);}
    }

    const user = USERS[id];
    return (
    <View style = {styles.container}>
        <SafeAreaView style={styles.profileTab}>
            <Icon icon = "Back" onPress={onPress}/>
            <View style={styles.Profile}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={user.avatar} />
                    <View style={styles.userBox}>
                        <Text style={styles.user}>{user.username}</Text>
                        <Text >Account ID: {user.id}</Text>
                    </View>
                    <Button title="Log Out" />
                    <Button title="Switch Account" onPress={() => ChangeID()}/>
                </View>
            </View>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    float: 'right',
    width: sizes.width,
    height: sizes.height,
    backgroundColor: colors.opaqueblack,
    },
  profileTab: {
    width: sizes.width * 0.5,
    height: sizes.height,
    backgroundColor: colors.light,
    color: colors.black,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  avatar: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: sizes.radius,
  },
  userBox: {
    margin: spacing.s,
    alignItems: 'center',
  },
  user: {
    color: colors.black,
    fontSize: sizes.body,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

export default ProfileScreen;
