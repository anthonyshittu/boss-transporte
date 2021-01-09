import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import ServiceCard from '../../components/ServiceCard';
import Banner from '../../components/Banner';

import {umzuge, umzugeService, umzugeBanner} from '../../assets/const';

const Umzuge = () => {
  const [value, setValue] = useState('Infos');
  const handleSetValue = (newValue) => {
    setValue(newValue);
  };
  return (
    <ScrollView style={styles.container}>
      <Banner
        {...umzugeBanner}
        value={value}
        handleSetValue={handleSetValue}
        firstValue="Infos"
        secondValue="Umzugs-Service"
        showButton
      />
      {value === 'Infos' && (
        <View style={styles.toggleContainers}>
          {umzuge.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </View>
      )}
      {value !== 'Infos' && (
        <View style={styles.toggleContainers}>
          {umzugeService.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Umzuge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f6f9',
  },
  toggleContainers: {
    alignItems: 'center',
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
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
  },
});
