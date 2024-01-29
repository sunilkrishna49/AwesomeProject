import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsViewScreen from '../screens/DetailsViewScreen';
import HomeScreen from '../screens/HomeScreen';
import ListViewScreen from '../screens/ListViewScreen';
import AddRecordScreen from '../screens/AddRecordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{title: ''}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListViewScreen} />
      <Stack.Screen name="Details" component={DetailsViewScreen} />
      <Stack.Screen name="AddRecord" component={AddRecordScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
