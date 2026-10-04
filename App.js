import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import ProfileIcon from './components/ProfileIcon';
import HomeIcon from './components/HomeIcon';
import AllAppsIcon from './components/AllAppsIcon';
import GoldIcon from './components/GoldIcon';
import GameIcon from './components/GameIcon';

import HomeScreen from './screens/HomeScreen';
import AllAppsScreen from './screens/AllAppsScreen';
import GoldScreen from './screens/GoldScreen';
import GameScreen from './screens/GameScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#0051cf',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, height: 60 },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="All Apps"
          component={AllAppsScreen}
          options={{
            tabBarIcon: ({ focused }) => <AllAppsIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Gold"
          component={GoldScreen}
          options={{
            tabBarIcon: ({ focused }) => <GoldIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{
            tabBarIcon: ({ focused }) => <GameIcon focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
