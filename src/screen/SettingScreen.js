import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity} from 'react-native';

const SettingScreen = ({navigation}) => {
    return (
       <View>
           <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
           <Text>登出</Text>
           </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default SettingScreen;