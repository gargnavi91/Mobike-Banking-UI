import { Image, ImageBackground, StyleSheet, KeyboardAvoidingView, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { sizes } from "../Assets/Theme/theme";
import KeyboardManager from 'react-native-keyboard-manager';
export default function Login({ navigation }) {
  const naviGateTo = () => {
    navigation.navigate("Dashboard");
  }
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setLayoutIfNeededOnUpdate(true);
    KeyboardManager.setEnableAutoToolbar(true);
    KeyboardManager.setToolbarDoneBarButtonItemText("Done");
    KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
    KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
    KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
    KeyboardManager.setShouldShowToolbarPlaceholder(true);
    KeyboardManager.setOverrideKeyboardAppearance(false);
    KeyboardManager.setKeyboardAppearance("default"); // "default" | "light" | "dark"
    KeyboardManager.setShouldResignOnTouchOutside(true);
    KeyboardManager.setShouldPlayInputClicks(true);
    KeyboardManager.resignFirstResponder();
    KeyboardManager.isKeyboardShowing()
      .then((isShowing) => {
        // ...
      });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
    // keyboardVerticalOffset={sizes.height*3}
    >
      <ScrollView>
        <ImageBackground source={require("../Assets/GreenBackground.png")}
          style={styles.greenBackground} resizeMode={"contain"}>
          <ImageBackground source={require("../Assets/Stripes.png")}
            style={styles.stripes}>
            <View style={styles.welcomeView}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>
            <ImageBackground source={require("../Assets/WhiteBackground.png")} resizeMode={"contain"}
              style={styles.whiteBackground} >
              <Image source={require("../Assets/GreetIcon.png")} style={styles.greetStyle} />
            </ImageBackground>
          </ImageBackground>
        </ImageBackground>
        <View style={styles.authView}>
          <View style={styles.usernameView}>
            <Image source={require("../Assets/UserName.png")}
              style={styles.userNameIcon} />
            <TextInput placeholder='Username' placeholderTextColor={"grey"}
              style={styles.TextInputPass} onChangeText={(text) => { console.log("textt"); }} />
          </View>
          <View style={styles.usernameView}>
            <Image source={require("../Assets/PasswordIcon.png")}
              style={styles.userNameIcon} />
            <TextInput placeholder='Password' placeholderTextColor={"grey"}
              style={styles.TextInputPass} />
          </View>
        </View>
        <TouchableOpacity style={styles.TouchableBtnLogin} onPress={() => { naviGateTo() }}>
          <Text style={styles.Login}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgetPassView}>
          <Text>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  greenBackground: {
    height: sizes.height * 56,
    top: -sizes.margin * 2.5
  },
  stripes: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: -10
  },
  keyboardView: {
    flex: 1,
    backgroundColor: "#F7F7F7"
  },
  welcomeView: {
    width: "100%",
    top: -sizes.margin * 8,
    alignItems: 'center'
  },
  welcomeText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: sizes.f6 * 1.2
  },
  whiteBackground: {
    height: sizes.height * 29,
    width: sizes.height * 29,
    top: -sizes.margin * 6,
    justifyContent: 'center',
    alignItems: "center"
  },
  greetStyle: {
    height: sizes.height * 27,
    width: sizes.height * 26,
    resizeMode: "stretch",
    marginTop: 70
  },
  authView: {
    width: "100%",
    alignItems: 'center'
  },
  usernameView: {
    height: sizes.height * 5,
    width: sizes.width * 28,
    backgroundColor: '#fff',
    marginTop: sizes.margin * 1,
    borderStartWidth: 1, borderEndWidth: 1,
    borderBottomWidth: 1, borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
    borderColor: "#D4D4D4",
    flexDirection: 'row',
    alignItems: 'center'
  },
  userNameIcon: {
    height: sizes.height * 2.5,
    width: sizes.height * 2.4,
    resizeMode: 'contain',
    marginHorizontal: sizes.margin / 2
  },
  PasswordIconView: {
    height: sizes.height * 5,
    width: sizes.width * 28,
    backgroundColor: '#fff',
    marginTop: sizes.margin,
    borderStartWidth: 1, borderEndWidth: 1,
    borderBottomWidth: 1, borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
    borderColor: "#D4D4D4",
    flexDirection: 'row',
    alignItems: 'center'
  },
  PasswordIcon: {
    height: sizes.height * 2.5,
    width: sizes.height * 2.4,
    resizeMode: 'contain',
    marginHorizontal: sizes.margin / 2
  },
  TextInputPass: {
    width: "100%",
    color: "grey"
  },
  TouchableBtnLogin: {
    height: sizes.height * 5,
    width: sizes.width * 28,
    backgroundColor: "#229397",
    marginTop: sizes.margin,
    borderRadius: sizes.radius * 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: sizes.margin * 2.5
  },
  Login: {
    color: "#fff",
    fontWeight: "800",
    fontSize: sizes.f7
  },
  ForgetPassView: {
    height: sizes.height * 3,
    width: sizes.width * 28,
    alignSelf: 'center', alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})