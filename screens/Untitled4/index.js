import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.logo}>My App</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Email" placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgot: {
    color: "black",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});
export default LoginScreen;