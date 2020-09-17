import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {color, hp, normalize, wp} from '../helper/responsive';
import Header from '../common/header';

const About = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: color.gray}} />
      <SafeAreaView style={{flex: 1, backgroundColor: color.gray}}>
        <StatusBar />
        <View style={{flex: 1}}>
          <Header />
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: color.black,
              paddingHorizontal: wp(3),
            }}>
            <Text style={styles.journalText}>About Lucid Dreams</Text>
            <Text
              style={{
                color: color.white,
                fontSize: normalize(16),
                textAlign: 'center',
                width: '95%',
                marginTop: hp(2),
                fontWeight: '500',
              }}>
              The goal of the LUCIDream app is to help you take control of your
              dreams!
            </Text>
            <Text style={styles.commonText}>
              This is very achievable by establishing a 'Reality Check' habit,
              which helps you determine whether you're dreaming or not.
            </Text>
            <Text style={styles.commonText}>
              The 2 easiest ways to do a Reality Check; 1) look at your hands
              carefully [in dreams, your hands may look strange] 2) look for
              next text to read carefully [in dreams, text looks may look hard
              to read]
            </Text>
            <Text style={styles.commonText}>
              If you're awake, everything will be normal. If you're dreaming,
              things will look strange.
            </Text>
            <Text style={styles.commonText}>
              The purpose of the 'Check Sound' randomly playing during the day
              is that helps build the habit to perform a Reality Check.
            </Text>
            <Text style={styles.commonText}>
              The magic occurs when the check Sound happens during your sleep
              while dreaming. With the right volume, the Check Sound will
              penetrate your dream and you will habitually perform a reality
              check.
            </Text>
            <Text style={styles.commonText}>
              It's important to ensure the Check Sound volume isn't too loud(so
              it doesn't wake you), or too quiet(so you don't miss it).
            </Text>
            <Text style={styles.commonText}>
              With a little practice, the Reality Check in your dream will
              enable you to realise thing aren't normal, and that you're in a
              dream!
            </Text>
            <Text style={styles.commonText}>
              At this point, you can often take control of the dream and do
              whatever you want!
            </Text>
            <Text style={styles.commonText}>
              Lucid Dreaming could happen within a few days or weeks.. Try it!
            </Text>
            <View
              style={{
                width: wp(10),
                height: wp(10),
                borderRadius: wp(5),
                overflow: 'hidden',
                marginLeft: wp(40),
                marginVertical: hp(2),
              }}>
              <Image
                source={require('../assets/facebook.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode={'contain'}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  journalText: {
    fontSize: normalize(20),
    color: color.white,
    textAlign: 'center',
    marginTop: hp(3),
    fontWeight: 'bold',
  },
  commonText: {
    color: color.white,
    paddingHorizontal: wp(3),
    textAlign: 'center',
    marginTop: hp(2),
    fontSize: normalize(14),
    lineHeight: 28,
  },
});
