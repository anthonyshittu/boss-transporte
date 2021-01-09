import React from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';
import {Title, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import ServiceCard from '../../components/ServiceCard';
import Reviews from '../../components/Reviews';
import Banner from '../../components/Banner';

import {reviews, services, stats, homeBanner} from '../../assets/const';

const {width: screenWidth} = Dimensions.get('window');

const Home = ({navigation}) => {
  const openScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Banner {...homeBanner} showButton={false} />
      <View style={styles.services}>
        <Title style={styles.serviceTitle}>Unsere Transport-Leistungen</Title>
        {services.map((service, index) => (
          <ServiceCard
            key={`service_${index}`}
            item={service}
            action={() => openScreen(service.title)}
          />
        ))}
      </View>
      <View>
        <ImageBackground
          style={styles.stats}
          source={{
            uri: 'https://www.bosstransporte.de/wp-content/uploads/möbel-3.jpg',
          }}
          resizeMode="cover">
          <LinearGradient
            colors={['rgba(33, 122, 206, 0.4)', '#143d58']}
            style={styles.linearGradient}>
            {stats.map((stat, index) => (
              <View key={`l_${index}`} style={stat.statContainer}>
                <Text style={styles.statTitle}>{stat.title}</Text>
                <Text style={styles.statSubTitle}>{stat.subTitle}</Text>
              </View>
            ))}
          </LinearGradient>
        </ImageBackground>
      </View>

      <Reviews
        reviews={reviews}
        title="Zufriedenheit garantiert!"
        type="review"
      />
      <Image
        style={styles.paypal}
        source={{
          uri:
            'https://www.bosstransporte.de/wp-content/uploads/de-pp-logo-cta-200px.png',
        }}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f2f6f9',
  },
  services: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f6f9',
    paddingVertical: 10,
  },
  serviceTitle: {
    fontSize: 25,
  },
  stats: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  linearGradient: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  statContainer: {
    margin: 10,
  },
  statTitle: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  statSubTitle: {
    fontSize: 20,
    color: '#f6961b',
  },
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  reviewContainer: {
    backgroundColor: 'white',
  },
  reviewTitle: {
    fontSize: 25,
    marginVertical: 10,
    alignSelf: 'center',
  },
  paypal: {
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
