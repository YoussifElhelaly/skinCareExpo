import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import homeIcon from '@/images/home.png'
import profileIcon from '../../images/user.png'
import chatIcon from '../../images/robot.png'
import scanIcon from '../../images/scanner.png'
import skinIcon from '../../images/skincare.png'
import { Image } from 'react-native';
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#E0A1AC",
          
        },
        headerTintColor: "white",
        headerTitleAlign:"center",
        tabBarStyle: {
          backgroundColor: '#E0A1AC',
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarActiveTintColor: "black",
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveTintColor: "black"
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerTitle: "profile",
          tabBarIcon: () => <Image
            source={profileIcon}
            style={{ width: 30, height: 30 }}
          />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "",
          headerTitle: "chat",
          tabBarIcon: () => <Image
            source={chatIcon}
            style={{ width: 30, height: 30 }}
          />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerTitle: "Home",
          tabBarIcon: () => <Image
            source={homeIcon}
            style={{ width: 30, height: 30 }}
          />,
        }}
      />
      <Tabs.Screen
        name="skinCare"

        options={{
          title: "",
          headerTitle: "skin care",
          tabBarIcon: () => <Image
            source={skinIcon}
            style={{ width: 30, height: 30 }}
          />,

        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "",
          headerTitle: "scan",
          tabBarIcon: () => <Image
            source={scanIcon}
            style={{ width: 30, height: 30 }}
          />,
        }}
      />
     
     
   
     
    </Tabs>
  );
}
