import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import TextInput from "../screens/TextInput";

// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";
import { emailValidator, passwordValidator, nameValidator } from "../core/utils";

const LoginScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);




  const _onSignUpPressed = async () => {
    navigation.navigate("ChangePassword")

    
  };





  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 130,
          width: 130,
          bottom: 20,
        }}
        source={require("../assets/Icon1.png")}
      ></Image>
      <View style={styles.textlabel}>
        <Text style={styles.label}>Login</Text>
      </View>
      <View style={styles.inputContainer1}>
        <Ionicons
          style={styles.inputIcons}
          name="ios-person-add"
          size={24}
          color="black"
        />
        <TextInput
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={"Username"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
          mode="outlined"
          returnKeyType="next"
          {...props}
        />
        {/* {errorText ? <Text style={styles.error}>{errorText}</Text> : null} */}
      </View>
      <View style={styles.inputContainer2}>
        <Entypo style={styles.inputIcons} name="lock" size={24} color="black" />
        <TextInput
          placeholder={"Password"}
          secureTextEntry={visible}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
        />
        <TouchableOpacity style={styles.btneye}
          onPress={() => {
            setVisible(!visible)
            setshow(!show)
          }}>
          <FontAwesome name={show === false ? 'eye' : 'eye-slash'} size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.label1}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity onPress={_onSignUpPressed} style={styles.btnLogin}>
        <Text style={styles.text}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={styles.errorview}>
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Textinput: {
    width: WIDTH - 50,
    height: 45,
    borderRadius: 25,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",


    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    fontSize: 16,
  },
  inputIcons: {
    position: "absolute",
    top: 20,
    left: 40,
  },
  inputContainer1: {
    marginTop: 20,
    top: 25,
    //position: "absolute",
  },
  inputContainer2: {
    marginTop: 50,
    top: -25,
    // position: "absolute",
  },

  btneye: {
    position: "absolute",
    top: 20,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    // backgroundColor: "#432577",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 20,
    top: -30,
    borderBottomWidth: 1,

    borderStyle: "solid",
    borderColor: "darkblue",
    borderWidth: 2,
    width: 240,
    height: 40,
  },
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
    color: "darkblue",
   alignItems:"flex-end"


  },
  
  text: {
    color: "darkblue",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    fontSize: 14,
    color: "#FF0000",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  errorview: {
    fontSize: 100,
  },
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
    top: -25,
    right: 10
  },
});
export default LoginScreen;