# LUCIDream

Changes required after clone the project.

Go to node_modules -> @react-native-community -> datetimepicker -> src -> timepicker.android.js

 line 39:
 return NativeModules.RNTimePickerAndroid.open(options);
to 
 return NativeModules.TimePickerAndroid.open(options);


KEYSTORE password: 123456
ALIAS: alias
