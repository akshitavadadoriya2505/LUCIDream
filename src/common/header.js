import React from 'react';
import {View, Text} from 'react-native';
import {color, hp, normalize} from '../helper/responsive';

const Header = () => {
  return (
    <View
      style={{
        height: hp(5),
        backgroundColor: color.gray,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: normalize(22),
          fontFamily: 'ArialRoundedMTBold',
        }}>
        LUCIDream
      </Text>
    </View>
  );
};

export default Header;
