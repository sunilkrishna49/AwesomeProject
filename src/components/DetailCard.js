import {View, Text} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function DetailCard({label, value}) {
  return (
    <View>
      <Text
        style={{fontSize: hp(3)}}
        className="text-start mx-3 text-white  tracking-wide font-bold mb-3">
        {label} : {value}
      </Text>
    </View>
  );
}
