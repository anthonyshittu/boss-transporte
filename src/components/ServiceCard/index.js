import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet} from 'react-native';
import {Card, Title, Paragraph, Button, List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServiceCard = ({item, action}) => {
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph style={styles.subTitle}>{item.subTitle}</Paragraph>
        {item.list &&
          item.list.map((service, index) => {
            return (
              <List.Item
                key={`services_${index}`}
                title={service}
                titleNumberOfLines={10}
                style={styles.item}
                left={(props) => (
                  <Ionicons
                    {...props}
                    name="checkmark-circle"
                    size={30}
                    color="#f6961b"
                  />
                )}
              />
            );
          })}
        {item.buttonText && (
          <Button
            mode="contained"
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => action()}>
            {item.buttonText}
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
  action: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    minHeight: 180,
    width: Dimensions.get('window').width - 40,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  content: {
    minHeight: 180,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#f6961b',
    marginTop: 5,
  },
  item: {
    width: '100%',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContent: {
    height: 50,
  },
});
