/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {data as initialData} from '../data';
import ItemCard from '../components/ItemCard';
import AddRecord from './AddRecordScreen';

export default function ListViewScreen({route}) {
  const navigation = useNavigation();
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (route.params?.newRecord) {
      setData(currentData => [...currentData, route.params.newRecord]);
    }
  }, [route.params?.newRecord]);
  return (
    <View className="bg-gray-300">
      <View className="flex-row mt-8 items-center justify-center">
        <View
          className="items-center mb-2 justify-center bg-black rounded-full border-[3px] border-neutral-200"
          style={{height: hp(8), width: wp(50)}}>
          <Text
            style={{fontSize: hp(3)}}
            className="text-white font-semibold tracking-wider">
            List View
          </Text>
        </View>
        <Animatable.View
          className="left-12"
          animation={'swing'}
          easing="ease-in-out"
          iterationCount={'infinite'}>
          <TouchableOpacity onPress={toggleModal}>
            <FontAwesome name="plus-square" size={45} color="black" />
          </TouchableOpacity>
        </Animatable.View>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        renderItem={({item, index}) => (
          <ItemCard navigation={navigation} index={index} item={item} />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <AddRecord onRequestClose={toggleModal} />
      </Modal>
    </View>
  );
}
