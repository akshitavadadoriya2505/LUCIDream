import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {color, hp, normalize, wp} from '../helper/responsive';
import Header from '../common/header';
import DatePicker from '../common/DatePicker/datepicker';
import moment from 'moment';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// moment(new Date()).format('LT')

const Setting = () => {
  const [data, setData] = useState({
    sleepTime: moment(new Date()).format('LT'),
    wakeTime: moment(new Date()).format('LT'),
    dayTimeCheck: 0,
    dayTimeSound: '',
    sleepCheck: 0,
    sleepSound: '',
    checkAudio: '',
    volume: '70%',
  });
  const [isActive, setIsActive] = useState(true);
  const handleTextInput = (key, value) => {
    setData({...data, [key]: value});
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: color.gray}} />
      <SafeAreaView style={{flex: 1, backgroundColor: color.gray}}>
        <StatusBar />
        <Header />
        <KeyboardAwareScrollView
          enableOnAndroid={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{flex: 1, backgroundColor: color.black}}>
          <ScrollView
            bounces={false}
            style={{
              flex: 1,
              backgroundColor: color.black,
            }}>
            <Text style={styles.journalText}>Your Sleep Schedule</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(1),
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Normally Sleep:</Text>
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: '60%',
                    borderRadius: hp(0.5),
                    overflow: 'hidden',
                  }}>
                  <DatePicker
                    date={new Date()}
                    mode="time"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    renderComponent={
                      <View
                        style={[
                          styles.textInputStyle,
                          {
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        ]}>
                        <Text>{data.sleepTime.toString()}</Text>
                      </View>
                    }
                    minuteInterval={1}
                    onPressConfirm={(datetime) =>
                      handleTextInput(
                        'sleepTime',
                        moment(datetime).format('LT'),
                      )
                    }
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Normally Wake:</Text>
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: '60%',
                    borderRadius: hp(0.5),
                    overflow: 'hidden',
                  }}>
                  <DatePicker
                    date={new Date()}
                    mode="datetime"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    renderComponent={
                      <View
                        style={[
                          styles.textInputStyle,
                          {
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        ]}>
                        <Text>{data.wakeTime.toString()}</Text>
                      </View>
                    }
                    minuteInterval={1}
                    onPressConfirm={(datetime) => {
                      handleTextInput(
                        'wakeTime',
                        moment(datetime).format('LT'),
                      );
                    }}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                color: color.white,
                marginHorizontal: wp(15),
                textAlign: 'center',
                marginTop: hp(1.5),
              }}>
              Approximate times are fine, Our algorithm will handle the rest!
            </Text>
            <Text style={[styles.journalText, {marginTop: hp(5)}]}>
              Reality Check Options
            </Text>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Daytime Checks:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.dayTimeCheck}
                  placeholder={data.dayTimeCheck.toString()}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('dayTimeCheck', text)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Daytime Sound:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.dayTimeSound}
                  placeholder={data.dayTimeSound}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('dayTimeSound', text)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Sleep Checks:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.sleepCheck}
                  placeholder={data.sleepCheck.toString()}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('sleepCheck', text)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Sleep Sound:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.sleepSound}
                  placeholder={data.sleepSound}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('sleepSound', text)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Check Audio:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.checkAudio}
                  placeholder={data.checkAudio}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('checkAudio', text)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Volume:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.volume}
                  placeholder={data.volume}
                  style={styles.textInputStyle}
                  onChange={(text) => handleTextInput('volume', text)}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: hp(4),
                alignItems: 'center',
              }}>
              <Pressable
                style={styles.pressableComponent}
                onPress={() => setIsActive(!isActive)}>
                <Text style={styles.textStyle}>{`Currently: ${
                  isActive ? 'Active' : 'Paused'
                }`}</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.pressableComponent,
                  {
                    marginTop: hp(1),
                  },
                ]}
                onPress={() => {
                  setData({
                    sleepTime: moment(new Date()).format('LT'),
                    wakeTime: moment(new Date()).format('LT'),
                    dayTimeCheck: 0,
                    dayTimeSound: '',
                    sleepCheck: 0,
                    sleepSound: '',
                    checkAudio: '',
                    volume: '70%',
                  });
                }}>
                <Text style={styles.textStyle}>Recommended Settings</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  journalText: {
    fontSize: normalize(20),
    color: color.white,
    marginTop: hp(3),
    fontWeight: '500',
    textAlign: 'center',
  },
  queText: {
    color: color.white,
    fontSize: normalize(16),
    textAlign: 'right',
    paddingRight: wp(1.5),
  },
  textInputStyle: {
    backgroundColor: 'rgb(236, 236, 236)',
    borderRadius: hp(0.5),
    height: hp(3),
    width: '60%',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: normalize(16),
    overflow: 'hidden',
  },
  pressableComponent: {
    backgroundColor: 'rgb(236, 236, 236)',
    width: '55%',
    paddingVertical: hp(0.5),
    borderRadius: hp(1),
  },
});
