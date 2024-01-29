import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {
  const Navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-gray-300 px-2 py-2">
      <Animatable.Text
        animation={'bounceInDown'}
        style={{fontSize: hp(5)}}
        className="font-bold tracking-wide">
        Home <Text className="text-rose-500">Screen</Text>
      </Animatable.Text>
      <Animatable.View
        animation={'pulse'}
        easing="ease-in-out"
        iterationCount={'infinite'}>
        <TouchableOpacity
          className="mt-8 items-center justify-center bg-rose-500 rounded-full border-[3px] border-neutral-200"
          style={{height: hp(10), width: wp(90)}}
          onPress={() => Navigation.navigate('List')}>
          <Text
            style={{fontSize: hp(4)}}
            className="text-white font-bold tracking-wider">
            List View
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
