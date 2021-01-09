import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Banner from '../../components/Banner';
import KontaktComponent from '../../components/KontaktComponent';
import KontaktForm from '../../components/KontaktForm';

import {kontaktBanner} from '../../assets/const';

const Kontakt = () => {
  const [buttonValue, setValue] = useState('Bilden');
  const handleSetValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <ScrollView style={styles.container}>
      <Banner
        {...kontaktBanner}
        firstValue="Bilden"
        secondValue="Kontaktdetails"
        value={buttonValue}
        handleSetValue={handleSetValue}
        showButton
      />
      {buttonValue === 'Bilden' && <KontaktForm />}
      {buttonValue !== 'Bilden' && <KontaktComponent />}
    </ScrollView>
  );
};

export default Kontakt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f6f9',
  },
  input: {
    backgroundColor: '#eee',
    height: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: '#f6961b',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  buttonContent: {
    height: 50,
    fontSize: 18,
  },
  radio: {
    flexDirection: 'row',
  },
  radioText: {
    fontSize: 25,
  },
  radioContainer: {
    marginHorizontal: 20,
  },
});
