import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

import FragenAntworten from '../../containers/FragenAntworten';

const FragenAntwortenStack = createStackNavigator();

const FragenAntwortenNav = () => {
  return (
    <FragenAntwortenStack.Navigator
      screenOptions={{
        header: ({navigation, scene, previous}) => {
          if (scene.route.name === 'FragenAntworten') {
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
      <FragenAntwortenStack.Screen
        name="FragenAntworten"
        component={FragenAntworten}
      />
    </FragenAntwortenStack.Navigator>
  );
};

export default FragenAntwortenNav;

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
