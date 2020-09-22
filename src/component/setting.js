import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import {color, hp, isIOS, normalize, wp} from '../helper/responsive';
import Header from '../common/header';
import DatePicker from '../common/DatePicker/datepicker';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import PushNotification from 'react-native-push-notification';

const Setting = () => {
  const [data, setData] = useState({
    sleepTime: moment(new Date()).format('LT'),
    wakeTime: moment(new Date()).format('LT'),
    dayTimeCheck: 3,
    dayTimeSound: '5-Seconds',
    sleepCheck: 5,
    sleepSound: '10-Seconds',
    checkAudio: 'Chimes',
    volume: '75%',
  });
  const [isActive, setIsActive] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [sleepTime, setSleepTime] = useState(false);
  const [wakeTime, setWakeTime] = useState(false);
  const handleTextInput = (key, value) => {
    setData({...data, [key]: value});
  };

  const alarmReminder = (date) => {
    let t1 = new Date();
    let t2 = new Date(date);
    let dif = t1.getTime() - t2.getTime();

    let Seconds_from_T1_to_T2 = dif / 1000;
    let Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    console.log(Seconds_Between_Dates);
    PushNotification.localNotificationSchedule({
      message: 'Reality Check: look at your hands + read stuff!',
      date: new Date(Date.now() + Seconds_Between_Dates * 1000),
    });
  };

  const renderIOSDatePicker = (item) => {
    return (
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
            <Text>
              {item === 'sleepTime'
                ? data.sleepTime.toString()
                : data.wakeTime.toString()}
            </Text>
          </View>
        }
        minuteInterval={1}
        onPressConfirm={(datetime) => {
          handleTextInput(
            item === 'sleepTime' ? 'sleepTime' : 'wakeTime',
            moment(datetime).format('LT'),
          );
          alarmReminder(datetime);
        }}
      />
    );
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
            <View style={styles.horizontalView}>
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
                  {(Platform.OS === 'ios' &&
                    renderIOSDatePicker('sleepTime')) || (
                    <View>
                      <View
                        style={[
                          styles.textInputStyle,
                          {
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        ]}>
                        <Pressable
                          onPress={() => {
                            setMode('time');
                            setSleepTime(true);
                          }}>
                          <Text>{data.sleepTime}</Text>
                        </Pressable>
                      </View>
                      {sleepTime && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date()}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || date;
                            setSleepTime(false);
                            handleTextInput(
                              'sleepTime',
                              moment(currentDate).format('LT'),
                            );
                            alarmReminder(currentDate);
                          }}
                        />
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.horizontalView}>
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
                  {(Platform.OS === 'ios' &&
                    renderIOSDatePicker('wakeTime')) || (
                    <View>
                      <View
                        style={[
                          styles.textInputStyle,
                          {
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        ]}>
                        <Pressable
                          onPress={() => {
                            setMode('time');
                            setWakeTime(true);
                          }}>
                          <Text>{data.wakeTime}</Text>
                        </Pressable>
                      </View>
                      {wakeTime && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date()}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || date;
                            setWakeTime(false);
                            handleTextInput(
                              'wakeTime',
                              moment(currentDate).format('LT'),
                            );
                            alarmReminder(currentDate);
                          }}
                        />
                      )}
                    </View>
                  )}
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
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Daytime Checks:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.dayTimeCheck}
                  placeholder={data.dayTimeCheck.toString()}
                  style={styles.textInputStyle}
                  keyboardType={'numeric'}
                  onChange={(text) =>
                    handleTextInput('dayTimeCheck', text.nativeEvent.text)
                  }
                />
              </View>
            </View>
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Daytime Sound:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.dayTimeSound}
                  placeholder={data.dayTimeSound}
                  style={styles.textInputStyle}
                  onChange={(text) => {
                    handleTextInput('dayTimeSound', text.nativeEvent.text);
                  }}
                />
              </View>
            </View>
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Sleep Checks:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.sleepCheck}
                  placeholder={data.sleepCheck.toString()}
                  style={styles.textInputStyle}
                  keyboardType={'numeric'}
                  onChange={(text) =>
                    handleTextInput('sleepCheck', text.nativeEvent.text)
                  }
                />
              </View>
            </View>
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Sleep Sound:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.sleepSound}
                  placeholder={data.sleepSound}
                  style={styles.textInputStyle}
                  onChange={(text) =>
                    handleTextInput('sleepSound', text.nativeEvent.text)
                  }
                />
              </View>
            </View>
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Check Audio:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.checkAudio}
                  placeholder={data.checkAudio}
                  style={styles.textInputStyle}
                  onChange={(text) =>
                    handleTextInput('checkAudio', text.nativeEvent.text)
                  }
                />
              </View>
            </View>
            <View style={styles.horizontalView}>
              <View style={{flex: 1}}>
                <Text style={styles.queText}>Volume:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={data.volume}
                  placeholder={data.volume}
                  style={styles.textInputStyle}
                  onChange={(text) =>
                    handleTextInput('volume', text.nativeEvent.text)
                  }
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
                    dayTimeCheck: 3,
                    dayTimeSound: '5-Seconds',
                    sleepCheck: 5,
                    sleepSound: '10-Seconds',
                    checkAudio: 'Chimes',
                    volume: '75%',
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
    fontFamily: isIOS ? 'ArialRoundedMTBold' : 'Arial_Rounded_MT',
  },
  queText: {
    color: color.white,
    fontSize: normalize(16),
    textAlign: 'right',
    paddingRight: wp(1.5),
    fontFamily: isIOS ? 'ArialRoundedMTBold' : 'Arial_Rounded_MT',
  },
  textInputStyle: {
    backgroundColor: 'rgb(236, 236, 236)',
    borderRadius: hp(0.5),
    height: hp(3),
    width: '60%',
    textAlign: 'center',
    fontFamily: isIOS ? 'ArialRoundedMTBold' : 'Arial_Rounded_MT',
    padding: 0,
    color: color.black,
  },
  textStyle: {
    color: color.black,
    textAlign: 'center',
    fontSize: normalize(16),
    overflow: 'hidden',
    fontFamily: isIOS ? 'ArialRoundedMTBold' : 'Arial_Rounded_MT',
  },
  pressableComponent: {
    backgroundColor: 'rgb(236, 236, 236)',
    width: '55%',
    paddingVertical: hp(0.5),
    borderRadius: hp(1),
  },
  horizontalView: {
    flexDirection: 'row',
    marginTop: hp(1),
    alignItems: 'center',
  },
});
