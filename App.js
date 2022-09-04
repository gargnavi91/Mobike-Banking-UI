
import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView,View, LogBox ,StatusBar, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from "./Navigators/StackNavigator";

const App = () => {
  LogBox.ignoreAllLogs();//Ignore all log notifications
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    backgroundColor: '#33373B',
  },
});
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyStatusBar backgroundColor={"#289BAB"} barStyle="light-content" />
      <NavigationContainer>
          <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )

}
export default App;

