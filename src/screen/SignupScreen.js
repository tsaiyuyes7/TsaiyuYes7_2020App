import React,{useContext,useEffect}from 'react';
import {View, Text, TouchableOpacity,StyleSheet,Image,TextInput,AsyncStorage} from "react-native"
import {Button,Input} from "react-native-elements";
import {StoreContext}from "../store/UserStore.js";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const SignupScreen = ({navigation}) =>{

    const {userState} = useContext(StoreContext);
    const [user,setUser] = userState;

    const saveToAsyncStorage = () => {
        try{
            AsyncStorage.setItem(ME_PERSISTENCE_KEY,JSON.stringify(user));
            AsyncStorage.setItem(HAS_SET_KEY,JSON.stringify(true));
        }catch(e){}
    };

    useEffect(()=>{
        saveToAsyncStorage();
    },[user]);

    return (
        <View style={{backgroundColor:'#fff',height:812}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
            source={require('../icon/back.png')}
            style={{width:24,height:24,marginLeft:36,marginTop:56}}
            />
            </TouchableOpacity>
            <View style={styles.headertext}>
            <Text style={{fontSize:28,color:"#675D5D",}}>註冊</Text>
            </View>

            <View style={{paddingTop:53 , alignItems:'center'}}>
            <View style={styles.nameinputsection}>
                    <Image
                    source={require('../icon/round-account-button-with-user-inside.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入姓名"
                style={{marginLeft:18,color:"#F0A202"}}
                onChangeText={(name)=>setUser({...user,name})}
                />
                </View>
                <View style={styles.emailinputsection}>
                    <Image
                    source={require('../icon/multimedia.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入信箱"
                style={{marginLeft:18,color:"#F0A202"}}
                onChangeText={(email)=>setUser({...user,email})}
                />
                </View>
                <View style={styles.passwordinputsection}>
                    <Image
                    source={require('../icon/lock.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入密碼"
                style={{marginLeft:18,color:"#F0A202"}}
                />
                </View>
            </View>
            <View style={styles.btnstyle}>
                <Button
                buttonStyle={{
                    backgroundColor:"#F0A202",
                    borderRadius:22
                }}
                
                title="註冊"
                onPress={() => navigation.navigate('Home')} 
                style={{borderRadius:22}}
                />
            </View>
            <View style={{marginTop:36 ,alignItems:'center',height:20}}>
                <Text style={{color:"#675D5D"}}>其他註冊</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
                <TouchableOpacity >
                    <View style={styles.anothersignin_btn}>
                    <Image
                    source={require('../icon/brands-and-logotypes.png')}
                    style={{height:20,width:20,}}
                    />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.anothersignin_btn2}>
                    <Image
                    source={require('../icon/facebook.png')}
                    style={{height:20,width:20}}
                    />
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    anothersignin_btn:{
        width:56,
        height:56,
        backgroundColor:'#fff',
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#c8c8c8',
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.5,
        elevation:2
    },
    anothersignin_btn2:{
        width:56,
        height:56,
        marginLeft:50,
        backgroundColor:'#fff',
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#c8c8c8',
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.5,
        elevation:2
    },
    headertext:{
        marginTop:56,
        width:328,
        marginLeft:36
        

    },
    nameinputsection:{
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8'
    },
    emailinputsection:{
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8',
        marginTop:36
    },
    passwordinputsection:{
        marginTop:36,
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8'
    },
    btnstyle:{
        width:303,
        height:44,
        marginLeft:36,
        marginTop:50
    },
    signupsection:{
        marginTop:36,
        height:79,
        flexDirection:'row',
        justifyContent:'center'
    }
})


export default SignupScreen;