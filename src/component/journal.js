import React from 'react';
import {View, SafeAreaView, StatusBar, Text, StyleSheet} from 'react-native';
import {color, hp, normalize, wp, isIOS} from '../helper/responsive';
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
    fontFamily: isIOS ? 'ArialRoundedMTBold' : 'Arial_Rounded_MT',
  },
  nextUpdateText: {
    color: 'rgb(255, 255, 0)',
    fontSize: normalize(40),
    width: wp(80),
    textAlign: 'center',
    marginTop: hp(30),
    fontFamily: isIOS ? 'InkFree' : 'Inkfree',
  },
});
