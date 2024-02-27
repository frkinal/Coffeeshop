import React from 'react';
import {View, Text} from 'react-native';
import {Header as HeaderProps} from '@components/types';
import {GradientBGIcon, ProfilePic} from '@components';
import style from './style';
import {COLORS, FONTSIZE} from 'src/theme/theme';
export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={style.HeaderContainer}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={style.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
