import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ServiceCard from '../ServiceCard';

const SectionCard = ({item}) => {
  return (
    <>
      <Ionicons
        style={styles.icon}
        name={item.icon}
        size={70}
        color="#f6961b"
      />
      <Title style={styles.title}>{item.title}</Title>
      <Paragraph style={styles.subTitle}>{item.subTitle}</Paragraph>
    </>
  );
};

export default SectionCard;

ServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 18,
  },
});
