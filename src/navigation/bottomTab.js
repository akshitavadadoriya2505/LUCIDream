import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {color, hp} from '../helper/responsive';
import About from '../component/about';
import Journal from '../component/journal';
import Setting from '../component/setting';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Setting"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {height: hp(9), backgroundColor: color.gray},
        showLabel: false,
      }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/journal-fill.png')
                  : require('../assets/journal-empty.png')
              }
              style={styles.imageDimension}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/setting-fill.png')
                  : require('../assets/setting-empty.png')
              }
              style={{
                height: hp(4.8),
                width: hp(4.8),
              }}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/about-fill.png')
                  : require('../assets/about-empty.png')
              }
              style={styles.imageDimension}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imageDimension: {
    height: hp(3.8),
    width: hp(3.8),
  },
});
