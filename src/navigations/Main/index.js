import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeNav from '../HomeNav';
import FragenAntwortenNav from '../FragenAntwortenNav';
import HilfeNav from '../HilfeNav';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        color="black"
        barStyle={styles.barStyle}
        labeled={true}>
        <Tab.Screen
          name="Home"
          component={HomeNav}
          color="white"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Ionicons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="FragenAntworten"
          component={FragenAntwortenNav}
          color="white"
          options={{
            tabBarLabel: 'FragenAntworten',
            tabBarIcon: ({color}) => (
              <Ionicons name="help-circle-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Hilfe"
          component={HilfeNav}
          color="white"
          options={{
            tabBarLabel: 'Hilfe',
            tabBarIcon: ({color}) => (
              <Ionicons
                name="information-circle-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#143d58',
  },
});
