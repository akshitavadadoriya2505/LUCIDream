import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  dateTouch: {
    backgroundColor: 'white',
  },
  dateTouchBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#333',
  },
  placeholderText: {
    color: '#c9c9c9',
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077',
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden',
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98',
  },
  btnTextCancel: {
    color: '#666',
  },
  btnCancel: {
    left: 0,
  },
  btnConfirm: {
    right: 0,
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  disabled: {
    backgroundColor: '#eee',
  },
});

export default style;
