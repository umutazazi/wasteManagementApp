import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import CameraScreen from "./src/screens/CameraScreen";
import LocationScreen from "./src/screens/LocationScreen";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./src/components/IconButton";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "grey",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "green",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Scan"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="scan" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
