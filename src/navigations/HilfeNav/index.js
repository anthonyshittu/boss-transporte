import React from 'react';
import {Image, StyleSheet, Easing} from 'react-native';
import {Appbar} from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Hilfe from '../../containers/Hilfe';
import Kontakt from '../../containers/Kontakt';
import HtmlParser from '../../containers/HtmlParser';

import datenschutz from '../../assets/datenschutz';
import impressum from '../../assets/impressum';

const HilfeStack = createStackNavigator();

const HilfeNav = () => {
  return (
    <HilfeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        header: ({navigation, scene, previous}) => {
          if (scene.route.name === 'Hilfe') {
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
      <HilfeStack.Screen name="Hilfe" component={Hilfe} />
      <HilfeStack.Screen
        name="Kontakt"
        component={Kontakt}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <HilfeStack.Screen
        name="Datenschutz"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {() => <HtmlParser html={datenschutz} />}
      </HilfeStack.Screen>
      <HilfeStack.Screen
        name="Impressum"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {() => <HtmlParser html={impressum} />}
      </HilfeStack.Screen>
    </HilfeStack.Navigator>
  );
};

export default HilfeNav;

const config = {
  animation: 'spring',
  config: {
    stiffness: 10000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.5,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 10,
    easing: Easing.linear,
  },
};

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
