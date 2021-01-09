import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

import Banner from '../../components/Banner';

import {fragenAntworten, fragenAntwortenBanner} from '../../assets/const';

const FragenAntworten = () => {
  const [selected, setSelected] = useState(null);
  const handleSetValue = () => {
    console.log('test');
  };
  return (
    <ScrollView>
      <Banner
        {...fragenAntwortenBanner}
        handleSetValue={handleSetValue}
        single
        showButton
      />
      {fragenAntworten.map((item, index) => (
        <List.Accordion
          id={index}
          key={index}
          title={item.title}
          titleNumberOfLines={3}
          onPress={() =>
            selected === index ? setSelected(null) : setSelected(index)
          }
          titleStyle={selected === index ? styles.titleSelected : styles.title}>
          <Text style={styles.text}>{item.subTitle}</Text>
        </List.Accordion>
      ))}
    </ScrollView>
  );
};

export default FragenAntworten;

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
  titleSelected: {
    color: '#f6961b',
  },
  text: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});
