import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='face-man-profile' size={30} color='black' />
      <Text>Hi, Tim!</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
