////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./Pages/Settings";
import Main from "./Pages/Main";
////////////////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden={true} />
        {/* Start Section Stack */}
        <Stack.Navigator>
          {/* Start Section Screen One */}
          <Stack.Screen
            options={{
              headerShown: false,
              animation: "none",
            }}
            name="Main"
            component={Main}
          />
          {/* End Section Screen One */}

          {/* Start Section Screen Two */}
          <Stack.Screen
            options={{
              headerShown: false,
              animation: "fade",
            }}
            name="Settings"
            component={Settings}
          />
          {/* End Section Screen Two */}
        </Stack.Navigator>
        {/* End Section Stack */}
      </NavigationContainer>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////// End Section Class
