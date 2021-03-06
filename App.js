import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import {
  SafeAreaView, StyleSheet, ScrollView,Image
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux';
import store from './src/store';
import ShoppingCartIcon from './src/screens/ShoppingCartIcon'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Fontisto from "react-native-vector-icons/Fontisto";
import MyProfile from "./src/screens/MyProfile"
 import { MaterialIcons } from '@expo/vector-icons';
 import Icon from "react-native-vector-icons/FontAwesome5";
 import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

 import NavigationDrawerHeader from "./components/NavigationDrawerHeader";

import Home from './src/screens/Home';
import Cart from './src/screens/ShopingCart';
import LoginScreen from './src/screens/LoginScreen'
import Logout from './src/screens/Logout'
import ChangePassword from './src/screens/ChangePassword'
import MyEarnings from './src/screens/MyEarnings'


import { View ,Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const LoginModule = createStackNavigator(
  {
    
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
    login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown:false,
        
      }),
    },
    product: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Product",
        headerTitleAlign:"center",
        headerRight: (props) => (
          <ShoppingCartIcon/>
          ),
      }),
    },
    cart: {
      screen: Cart,
      navigationOptions: {
        drawerIcon: () => {
          return <FontAwesome5Icon name="power-off" size={20}  />
        }
      
      },
    },
  
}
);
const MyProfile1 = createStackNavigator(
  {
    MyEarnings: {
      screen: MyProfile,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
  },
  
);
const MyEarnings1 = createStackNavigator(
  {
    MyEarnings: {
      screen: MyEarnings,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
  },
  
);

const ChangePassword1 = createStackNavigator(
  {
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
   
  },
  
);
const Logout1 = createStackNavigator(
  {
    Logout: {
      screen: Logout,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
   
   
  },
  
);
const AppNavigator = createDrawerNavigator({
 
  InitialPage:{
    screen:LoginModule,
    navigationOptions: ({navigation}) => {
      return {
          drawerLabel: () => null,
      }
  
    
    },
  },
  MyProfile:{
    screen:MyProfile1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="user-alt" size={20}  />
      }
    
    },
  },
 
  MyEarnings:{
    screen:MyEarnings1,
   navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="money-bill-wave" size={20}  />
      }
    
    },
  },
  ChangePassword: {
    screen: ChangePassword1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="key" size={20}  />
      }
    
    },
       
  },
  Logout: {
    screen: Logout1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="power-off" size={20}  />
      }
    
    },
  },
  
},
 
{
  contentComponent: (props) => (
    <SafeAreaView>
      <View style={stylesSidebar.sideMenuContainer}>
        <View style={stylesSidebar.profileHeader}>
          <View style={stylesSidebar.profileHeaderPicCircle}>
          <Avatar
            size="large"
            rounded

  
  source={require("./assets/WelcomePage.jpg")}

/>
          
          </View>
          <Text style={stylesSidebar.profileHeaderText}>CAROLINE MATHEW</Text>
        </View>

        <View style={stylesSidebar.profileHeaderLine} />
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                color: "white",
                backgroundColor: "white",
              }}
            >
              <DrawerItems {...props} /></View>
          </ScrollView></View></View>
    </SafeAreaView>

  )
 
},
);

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",

    backgroundColor: "white",
    paddingTop: 0,


    color: "rgb(0,0,0)",
  },
  imageali: {
    borderRadius: 20,
    height: 5,
    width: 5,
    margin:15,
    top:15,
    
  },
  
  profileHeader: {
    flexDirection: "column",
    backgroundColor: "#44bcd8",
    marginLeft:0,
    paddingTop:30,
    paddingLeft:50,

    height:150,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 70,
    height: 70,
    borderRadius: 60 / 2,
    color: "rgb(0,0,0)",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "rgb(0,0,0)",
    right:0,
    alignSelf: "center",
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "rgb(0,0,0)",
    marginTop: 15,
    marginBottom: 10,
  },
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
