import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AddRecordCard({userId, setUserId}) {
  return (
    <View
      className="bg-black/5 p-3 rounded-xl"
      style={{height: hp(8), width: wp(80)}}>
      <TextInput
        placeholder="UserId"
        placeholderTextColor={'gray'}
        value={userId}
        onChangeText={setUserId}
      />
    </View>
  );
}
