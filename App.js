import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import {
  SafeAreaView, StyleSheet, ScrollView
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux';
import store from './src/store';
import ShoppingCartIcon from './src/screens/ShoppingCartIcon'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Fontisto from "react-native-vector-icons/Fontisto";

 import { MaterialIcons } from '@expo/vector-icons';
 import Icon from "react-native-vector-icons/FontAwesome5";
 import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

 import NavigationDrawerHeader from "./components/NavigationDrawerHeader";

import Home from './src/screens/Home';
import Cart from './src/screens/ShopingCart';
import LoginScreen from './src/screens/LoginScreen'
import { View ,Text} from 'react-native';
const Welcome = createStackNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      
      headerShown:false,
    }),
    },
  },
  
);

const Login = createStackNavigator(
  {
    login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerShown:false,
        
      }),
    },
  },
  
);

const Product = createStackNavigator(
  {
    product: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Product",
        headerTitleAlign:"center"

      }),
    },
  },
  
);
const AppNavigator = createDrawerNavigator({
  Welcome:{
    screen:Welcome,
    navigationOptions: {
      header: null,
    }
  },
 
  Login:{
    screen:Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Product,
    navigationOptions: {
      drawerIcon: () => {
        return <Fontisto name="heart" size={20}  />
      }
    
    },
       
  },
  Cart: {
    screen: Cart,
  },
  contentComponent: (props) => (
    <SafeAreaView>
      <View style={stylesSidebar.sideMenuContainer}>
        <View style={stylesSidebar.profileHeader}>
          <View style={stylesSidebar.profileHeaderPicCircle}>
            <Text style={{ fontSize: 25, color: "#05075d" }}>
              {"About React".charAt(0)}
            </Text>
          </View>
          <Text style={stylesSidebar.profileHeaderText}>PROFILE</Text>
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
 {
  initialRouteName: 'Welcome',
  defaultNavigationOptions : ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#2962FF',
    },
    headerTintColor: '#fff',
    headerRight: (props) => (
    <ShoppingCartIcon/>
    ),
  }),
  headerMode: 'screen',
}

);
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44bcd8",
    paddingTop: 40,
    color: "rgb(0,0,0)",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#44bcd8",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "rgb(0,0,0)",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "rgb(0,0,0)",
    alignSelf: "center",
    paddingHorizontal: 10,
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
