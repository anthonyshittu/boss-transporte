import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Button, Title, Text} from 'react-native-paper';

import ToggleButtons from '../../components/ToggleButtons';

const Banner = ({
  imgUri,
  title,
  buttonText,
  subTitle,
  value,
  handleSetValue,
  single,
  showButton,
  firstValue,
  secondValue,
}) => {
  return (
    <ImageBackground
      style={styles.stats}
      source={{
        uri: imgUri,
      }}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(33, 122, 206, 0.4)', '#143d58']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{title}</Title>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        {showButton && (
          <View style={styles.buttons}>
            {!single && (
              <ToggleButtons
                firstValue={firstValue}
                secondValue={secondValue}
                value={value}
                handleChange={(selected) => handleSetValue(selected)}
              />
            )}
            {single && (
              <Button
                style={styles.singleButton}
                labelStyle={styles.singleButtonLabel}
                contentStyle={styles.singleButtonContent}>
                {buttonText}
              </Button>
            )}
          </View>
        )}
      </LinearGradient>
    </ImageBackground>
  );
};

export default Banner;

Banner.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  value: PropTypes.string,
  handleSetValue: PropTypes.func,
  showButton: PropTypes.bool,
  single: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f6f9',
  },
  stats: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  linearGradient: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
  subTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
  },
  singleButton: {
    backgroundColor: '#f6961b',
  },
  singleButtonLabel: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 20,
  },
  singleButtonContent: {
    height: 50,
  },
});
