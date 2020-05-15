import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity,Button, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {SignStackNavigation} from "./src/screen"
import HomeTabNavigation from "./src/navigations/MainTab.js"
import {StoreProvider} from "./src/store/UserStore.js"

const PERSISTENCE_KEY = "NAVIGATION_STATE";


const Stack = createStackNavigator();
  

const App=()=> {

  const [isLoadingComplete,setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  React.useEffect(()=>{
    async function loadResourceAndDataAsync(){
      try{
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      }catch(e){
        console.warn(e);
      }finally{
        setLoadingComplete(true);

      }
    }
    loadResourceAndDataAsync();
  },[]);

  if (!isLoadingComplete){
    return null;

  }  else{
   
  return (
    <NavigationContainer
      initialState={initialNavigationState}
      onStateChange={(state)=>
        AsyncStorage.setItem(PERSISTENCE_KEY,JSON.stringify(state))
    }>
      <SignStackNavigation/>
    </NavigationContainer>
  );
  }
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
    </StoreProvider>// user變成全域變數
  )
}



