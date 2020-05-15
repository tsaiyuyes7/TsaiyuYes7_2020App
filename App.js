import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {SignStackNavigation} from "./src/screen"
import HomeTabNavigation from "./src/navigations/MainTab.js"
import {StoreProvider} from "./src/store/UserStore.js"



const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <SignStackNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ()=>{
  return(
    <StoreProvider>
      <App/>
    </StoreProvider>// user變成狀態變數
  )
}



