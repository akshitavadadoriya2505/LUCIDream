import React from 'react';
import {View, SafeAreaView, StatusBar, Text, StyleSheet} from 'react-native';
import {color, hp, normalize, wp} from '../helper/responsive';
import Header from '../common/header';

const Journal = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: color.gray}} />
      <SafeAreaView style={{flex: 1, backgroundColor: color.gray}}>
        <StatusBar />
        <View style={{flex: 1}}>
          <Header />
          <View
            style={{
              flex: 1,
              backgroundColor: color.black,
              alignItems: 'center',
            }}>
            <Text style={styles.journalText}>Journal</Text>
            <Text style={styles.nextUpdateText}>
              Coming In Our Next Update!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Journal;

const styles = StyleSheet.create({
  journalText: {
    fontSize: normalize(18),
    color: color.white,
    textAlign: 'center',
    marginTop: hp(3),
    fontWeight: '500',
  },
  nextUpdateText: {
    color: 'rgb(255, 255, 0)',
    fontSize: normalize(30),
    width: wp(60),
    textAlign: 'center',
    marginTop: hp(30),
    fontFamily: 'ArialRoundedMTBold',
  },
});
