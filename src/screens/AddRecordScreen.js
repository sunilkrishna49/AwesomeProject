import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function AddRecord({onRequestClose}) {
  const [userId, setUserId] = useState('');
  const [Id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');
  const navigation = useNavigation();

  const SubmitHandler = () => {
    const newRecord = {
      userId: parseInt(userId),
      id: parseInt(Id),
      title: title,
      completed: completed === 'true',
    };

    Alert.alert('Record Added Successfully', '', [
      {
        text: 'OK',
        onPress: () => {
          setUserId('');
          setId('');
          setTitle('');
          setCompleted('');
          Keyboard.dismiss();
        },
      },
    ]);
    navigation.navigate('List', {newRecord: newRecord});
    if (onRequestClose) {
      onRequestClose();
    }
  };

  return (
    <View
      className="flex-1 rounded-2xl mx-5 my-20"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
      <View className="items-center justify-center">
        <View
          className=" mt-5  items-center mb-4 justify-center bg-black rounded-full border-[3px] border-neutral-200"
          style={{height: hp(8), width: wp(60)}}>
          <Text
            style={{fontSize: hp(3)}}
            className="text-white font-semibold tracking-wider">
            Add Record Form
          </Text>
        </View>

        <View className=" items-center mt-4 space-y-5 justify-center">
          <View
            className="bg-gray-300 p-3 rounded-xl"
            style={{height: hp(8), width: wp(80)}}>
            <TextInput
              placeholder="UserId"
              placeholderTextColor={'gray'}
              value={userId}
              onChangeText={setUserId}
            />
          </View>
          <View
            className="bg-gray-300 p-3 rounded-xl"
            style={{height: hp(8), width: wp(80)}}>
            <TextInput
              placeholder="Id"
              placeholderTextColor={'gray'}
              value={Id}
              onChangeText={setId}
            />
          </View>
          <View
            className="bg-gray-300 p-3 rounded-xl"
            style={{height: hp(8), width: wp(80)}}>
            <TextInput
              placeholder="Title"
              placeholderTextColor={'gray'}
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View
            className="bg-gray-300 p-3 rounded-xl"
            style={{height: hp(8), width: wp(80)}}>
            <TextInput
              placeholder="Completed Task"
              placeholderTextColor={'gray'}
              value={completed}
              onChangeText={setCompleted}
            />
          </View>
        </View>
        <Animatable.View
          className=" items-center mx-10 justify-center mt-9"
          animation={'pulse'}
          easing="ease-in-out"
          iterationCount={'infinite'}>
          <TouchableOpacity
            className="items-center justify-center bg-rose-500 rounded-md"
            style={{height: hp(8), width: wp(80)}}
            onPress={SubmitHandler}>
            <Text
              style={{fontSize: hp(3)}}
              className="text-white font-bold tracking-widest">
              SUBMIT
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}
