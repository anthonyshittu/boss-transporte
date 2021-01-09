import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import ServiceCard from '../../components/ServiceCard';
import Banner from '../../components/Banner';
import Reviews from '../../components/Reviews';

import {
  entsorgung,
  entsorgungBanner,
  entsorgungReview,
  entsorgungService,
} from '../../assets/const';

const Entsorgung = () => {
  const [value, setValue] = useState('Infos');
  const handleSetValue = (newValue) => {
    setValue(newValue);
  };
  return (
    <ScrollView style={styles.container}>
      <Banner
        {...entsorgungBanner}
        value={value}
        firstValue="Infos"
        secondValue="Umzugs-Service"
        handleSetValue={handleSetValue}
      />
      {value === 'Infos' && (
        <View style={styles.toggleContainers}>
          {entsorgung.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
          <Reviews
            reviews={entsorgungReview}
            title="Zufriedenheit Garantiert!"
            type="review"
            key="review"
          />
        </View>
      )}
      {value !== 'Infos' && (
        <View style={styles.toggleContainers}>
          {entsorgungService.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Entsorgung;

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
