import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ServiceCard from '../../components/ServiceCard';
import Banner from '../../components/Banner';
import Reviews from '../../components/Reviews';
import PriceCard from '../../components/PriceCard';

import {
  mobelTaxi,
  mobelTaxiReview,
  mobelTaxiInfo,
  mobelTaxiVorteile,
  möbeltaxiPreise,
} from '../../assets/const';

const MobelTaxi = () => {
  const [value, setValue] = useState('Infos');
  const handleSetValue = (newValue) => {
    setValue(newValue);
  };
  return (
    <ScrollView style={styles.container}>
      <Banner
        {...mobelTaxi}
        value={value}
        handleSetValue={handleSetValue}
        firstValue="Infos"
        secondValue="Umzugs-Service"
        showButton
      />
      {value === 'Infos' && (
        <>
          <View style={styles.toggleContainers}>
            {mobelTaxiInfo.map((item, index) => (
              <ServiceCard key={`mobel_${index}`} item={item} />
            ))}
          </View>
          <Reviews
            reviews={mobelTaxiVorteile}
            title="Ihre Vorteile"
            type="section"
            key="section"
          />
          <View style={styles.bookingContainer}>
            <Title style={styles.bookingTitle}>
              So einfach buchen sie ihr Möbeltaxi:{' '}
            </Title>
            <View style={styles.bookingDetails}>
              <Ionicons
                name="document-text-outline"
                size={50}
                color="#f6961b"
              />
              <Title style={styles.bookingType}>
                KONTAKTFORMULAR AUSFÜLLEN ODER GANZ SCHNELL TELEFONISCH TERMIN
                VEREINBAREN.
              </Title>
              <Ionicons
                name="time-outline"
                size={50}
                color="#f6961b"
                style={styles.bookingIcon}
              />
              <Title style={styles.bookingType}>
                SOBALD IHRE BENACHRICHTIGUNG EINGEGANGEN IST, MELDEN WIR UNS BEI
                IHNEN ZUR ABSPRACHE.
              </Title>
            </View>
          </View>
          <Reviews
            reviews={mobelTaxiReview}
            title="Kunden über ihre Erfahrung mit unserem Möbeltaxi in Berlin"
            type="review"
            key="review"
          />
        </>
      )}
      {value !== 'Infos' && (
        <View style={styles.toggleContainers}>
          {möbeltaxiPreise.map((item, index) => (
            <PriceCard key={index} item={item} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default MobelTaxi;

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
  bookingContainer: {
    marginVertical: 30,
  },
  bookingTitle: {
    marginVertical: 30,
    textAlign: 'center',
  },
  bookingType: {
    marginVertical: 10,
    textAlign: 'center',
  },
  bookingIcon: {
    marginVertical: 10,
  },
  bookingDetails: {
    alignItems: 'center',
  },
});
