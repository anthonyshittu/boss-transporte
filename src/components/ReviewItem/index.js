import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Text, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReviewItem = ({item}) => {
  return (
    <Card.Content style={styles.container}>
      <View style={styles.ratings}>
        <Ionicons name="star" size={35} color="#f6961b" />
        <Ionicons name="star" size={35} color="#f6961b" />
        <Ionicons name="star" size={35} color="#f6961b" />
        <Ionicons name="star" size={35} color="#f6961b" />
        <Ionicons name="star" size={35} color="#f6961b" />
      </View>
      <Text style={styles.comment}>{item.comment}</Text>
      {item.imgUri && (
        <Avatar.Image
          style={styles.avatar}
          size={100}
          source={{
            uri: item.imgUri,
          }}
        />
      )}
      <Title style={styles.name}>{item.name}</Title>
    </Card.Content>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
  },
  ratings: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  comment: {
    marginTop: 10,
    fontSize: 20,
  },
  name: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 22,
  },
  avatar: {
    marginTop: 10,
    alignSelf: 'center',
  },
});
