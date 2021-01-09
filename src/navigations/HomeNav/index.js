import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../../containers/Home';
import Umzuge from '../../containers/Umzuge';
import MobelTaxi from '../../containers/MobelTaxi';
import Entsorgung from '../../containers/Entsorgung';

const HomeStack = createStackNavigator();

const HomeNav = () => {
  return (
    <HomeStack.Navigator
      headerMode="float"
      screenOptions={{
        header: ({navigation, scene, previous}) => {
          if (scene.route.name === 'Home') {
            return (
              <Appbar.Header style={styles.homeHeader}>
                <Image
                  style={styles.imageHeader}
                  source={{
                    uri:
                      'https://www.bosstransporte.de/wp-content/uploads/Logo_1-ohne-slogan.png',
                  }}
                  resizeMode="contain"
                />
              </Appbar.Header>
            );
          }
          return (
            <Appbar.Header style={styles.header}>
              {previous ? (
                <Appbar.BackAction onPress={() => navigation.goBack()} />
              ) : null}
              <Appbar.Content
                titleStyle={styles.title}
                title={scene.route.name}
              />
            </Appbar.Header>
          );
        },
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Umzüge"
        component={Umzuge}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <HomeStack.Screen
        name="Möbeltaxi"
        component={MobelTaxi}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <HomeStack.Screen
        name="Entsorgung"
        component={Entsorgung}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  imageHeader: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeHeader: {
    backgroundColor: '#143d58',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#143d58',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});
