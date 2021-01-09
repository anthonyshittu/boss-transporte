import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

const HtmlParser = ({html}) => {
  return (
    <ScrollView style={styles.body}>
      <HTML html={html} imagesMaxWidth={Dimensions.get('window').width} />
    </ScrollView>
  );
};

export default HtmlParser;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    fontSize: 18,
    padding: 10,
  },
});
