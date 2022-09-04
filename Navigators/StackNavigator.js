import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Src/Container/Login";
import Dashboard from "../Src/Container/Dashboard";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#1178B8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator };