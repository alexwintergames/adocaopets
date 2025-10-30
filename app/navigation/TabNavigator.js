import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import CadastroScreen from '../screens/CadastroScreen';
import SobreScreen from '../screens/SobreScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Adoção') iconName = 'paw';
          else if (route.name === 'Cadastrar') iconName = 'add-circle';
          else if (route.name === 'Sobre') iconName = 'information-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Adoção" component={StackNavigator} />
      <Tab.Screen name="Cadastrar" component={CadastroScreen} />
      <Tab.Screen name="Sobre" component={SobreScreen} />
    </Tab.Navigator>
  );
}
