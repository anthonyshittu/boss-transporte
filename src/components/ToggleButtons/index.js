import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

const ToggleButtons = ({firstValue, secondValue, value, handleChange}) => {
  return (
    <View style={styles.toggle}>
      <Button
        mode="contained"
        labelStyle={
          value !== firstValue
            ? styles.toggleButtonLabel
            : styles.toggleSelectedButtonLabel
        }
        style={styles.toggleButton}
        contentStyle={styles.contentStyle}
        onPress={() => handleChange(firstValue)}>
        {firstValue}
      </Button>
      <Button
        mode="contained"
        labelStyle={
          value !== secondValue
            ? styles.toggleButtonLabel
            : styles.toggleSelectedButtonLabel
        }
        style={styles.toggleButton}
        contentStyle={styles.contentStyle}
        onPress={() => handleChange(secondValue)}>
        {secondValue}
      </Button>
    </View>
  );
};

export default ToggleButtons;

ToggleButtons.propTypes = {
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#f6961b',
    height: 60,
  },
  toggleButton: {
    width: '50%',
    height: 60,
    backgroundColor: '#f6961b',
  },
  toggleSelectedButton: {
    width: '50%',
    backgroundColor: '#f6961b',
    borderBottomWidth: 5,
    borderRadius: 0,
  },
  toggleButtonLabel: {
    color: 'white',
    fontWeight: '900',
  },
  toggleSelectedButtonLabel: {
    color: '#143d58',
    fontWeight: '900',
  },
  contentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
