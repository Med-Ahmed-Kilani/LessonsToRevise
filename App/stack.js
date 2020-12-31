import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddLessons from './addLessons/AddLessons';
import Review from './review/Review';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="add"
          component={AddLessons}
          options={{ title: 'welcome' }}
        />
        <Stack.Screen 
          name="Home" 
          component={Review} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;