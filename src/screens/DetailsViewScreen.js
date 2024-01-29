import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DetailCard from '../components/DetailCard';
import * as Animatable from 'react-native-animatable';

export default function DetailsView({route}) {
  const {title, userId, id, completed} = route.params;

  return (
    <View className="bg-gray-300 flex-1 items-center">
      <Animatable.View
        animation={'bounceInLeft'}
        className=" mt-10  items-center mb-8 justify-center bg-black rounded-full border-[3px] border-neutral-200"
        style={{height: hp(8), width: wp(50)}}>
        <Text
          style={{fontSize: hp(3)}}
          className="text-white font-semibold tracking-wider">
          Details View
        </Text>
      </Animatable.View>
      <Animatable.View
        animation={'bounceInRight'}
        className="mx-4 rounded-xl  justify-center bg-rose-500 border-[1px] border-neutral-200"
        style={{height: hp(30), width: wp(90)}}>
        <DetailCard label="Item No" value={id} />
        <DetailCard label="UserId" value={userId} />
        <DetailCard label="Title" value={title} />
        <DetailCard label="Completed" value={completed ? 'Yes' : 'No'} />
      </Animatable.View>
    </View>
  );
}
