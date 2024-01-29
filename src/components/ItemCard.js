import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ItemCard({item, navigation}) {
  return (
    <TouchableOpacity
      className="mb-4 mx-5 rounded-3xl  items-center justify-center bg-rose-500 border-[1px] border-black"
      style={{height: hp(10), width: wp(40)}}
      onPress={() =>
        navigation.navigate('Details', {
          title: item?.title,
          userId: item?.userId,
          id: item?.id,
          completed: item?.completed,
        })
      }>
      <Text
        style={{fontSize: hp(2.5)}}
        className="text-center   tracking-wide text-white font-bold">
        Item No.{item?.id}
      </Text>
    </TouchableOpacity>
  );
}
