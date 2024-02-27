import React from 'react';
import {View, Image} from 'react-native';
import style from './style';
export const ProfilePic = () => {
  return (
    <View style={style.ImageContainer}>
      <Image
        source={require('../../assets/app_images/avatar.png')}
        style={style.Image}
      />
    </View>
  );
};
