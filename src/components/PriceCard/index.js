import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text} from 'react-native';

const PriceCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.text}>{item.startText}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Ionicons name="logo-euro" size={40} color="#f6961b" />
      </View>
      <Button labelStyle={styles.button}>DIREKT BUCHEN</Button>
    </View>
  );
};

export default PriceCard;

PriceCard.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontSize: 35,
    marginTop: 10,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 22,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 25,
  },
  price: {
    fontSize: 35,
    color: '#f6961b',
  },
  button: {
    color: 'blue',
    fontSize: 25,
  },
});
