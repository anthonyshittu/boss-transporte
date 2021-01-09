import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import openMap from 'react-native-open-maps';

const Kontakt = () => {
  const openTel = async (text) => await Linking.openURL(`tel:${text}`);
  const openMail = async (email) => await Linking.openURL(`mailto:${email}`);
  const openWhatsApp = async () =>
    await Linking.openURL(
      'https://wa.me/send?phone=491787444666&text=Hallo,%20ich%20kontaktiere%20Sie%20%C3%BCber%20Ihre%20Webseite,%20mein%20Name%20ist:',
    );
  const goToYosemite = () => {
    openMap({latitude: 52.46562, longitude: 13.4239112});
  };

  return (
    <View>
      <List.Item
        style={styles.item}
        title="01787444666"
        left={() => <Ionicons name="call" size={30} color="#1576cd" />}
        onPress={({title}) => openTel(title)}
      />
      <List.Item
        style={styles.item}
        title="Mo-So"
        description="Rund um die Uhr erreichbar"
        left={() => <Ionicons name="home" size={30} color="#1576cd" />}
      />
      <List.Item
        style={styles.item}
        title="Boss Transports company, Silbersteinstraße 115, Berlin, 12051"
        titleNumberOfLines={2}
        left={() => <Ionicons name="location" size={30} color="#1576cd" />}
        onPress={() => goToYosemite()}
      />
      <List.Item
        style={styles.item}
        title="kontakt@bosstransporte.de"
        left={() => <Ionicons name="mail" size={30} color="#1576cd" />}
        onPress={() => openMail()}
      />
      <List.Item
        style={styles.item}
        title="WhatsApp uns"
        left={() => <Ionicons name="logo-whatsapp" size={30} color="#1576cd" />}
        onPress={() => openWhatsApp()}
      />
    </View>
  );
};

export default Kontakt;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
});
