import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image } from "react-native";

//TAB BAR ICONS
import homeTabBar from "../assets/tab-bar-icons/home-tab-active.png";
import creditTabBar from "../assets/tab-bar-icons/credit-tab.png";
import notificationTabBar from "../assets/tab-bar-icons/notification-tab.png";
import profileTabBar from "../assets/tab-bar-icons/profile-tab.png";


import { useNavigation } from '@react-navigation/native';
import CreditApplication from "../screens/CreditApplication";
import CreditConfirmation from "../screens/CreditConfirmation";
import CustomerProfile from "../screens/CustomerProfile";

// TabBar
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="CreditApplication" component={CreditApplication} />
      <Stack.Screen name="CreditConfirmation" component={CreditConfirmation} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "400",
          },
          tabBarInactiveTintColor: "#232323",
          tabBarActiveTintColor: "rgba(102, 204, 35, 1)",
        }}
      >
        <Tabs.Screen
          name="Главная"
          component={HomeStack}
          options={{
            tabBarLabel: () => {
              return null;
            },
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={homeTabBar}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Займ"
          component={HomePage}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={creditTabBar}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Уведомления"
          component={HomePage}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={notificationTabBar}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Профиль"
          component={HomePage}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={profileTabBar}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
