import React from 'react';
import {View, Text} from 'react-native';
import {color, hp, isIOS, normalize} from '../helper/responsive';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: color.gray,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: normalize(35),
          fontFamily: isIOS ? 'InkFree' : 'Inkfree',
          color: color.black,
        }}>
        LUCIDream
      </Text>
    </View>
  );
};

export default Header;
