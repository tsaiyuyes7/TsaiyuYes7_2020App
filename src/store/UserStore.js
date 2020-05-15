import React ,{createContext,useState,useEffect} from "react";
import {AsyncStorage} from "react-native";
import userData from "../json/user.json";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";


export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [user,setUser] = useState(userData);
    const store = {
        userState: [user,setUser]
    };
    


    const restoreState = async () => {
        try{
            const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
            const hasSet = JSON.parse(hasSetString);
            if(hasSet){
                const userString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
                const state_user = JSON.parse(userString);
                setUser(state_user);
            }
        
        }catch(e) {}
    };

    useEffect(()=>{
        restoreState();
    },[]);

    return(
        <StoreContext.Provider value={store}> 
            {children} 
        </StoreContext.Provider> //value要傳遞給childrean
    );
};

