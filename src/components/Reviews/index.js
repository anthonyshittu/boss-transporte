import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import Pagination from '../../components/CarouselPagination';
import ReviewItem from '../../components/ReviewItem';
import SectionCard from '../../components/SectionCard';

const {width: screenWidth} = Dimensions.get('window');

const Reviews = ({reviews, title, type}) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item}) => {
    return (
      <>
        <ReviewItem item={item} />
        <Pagination length={reviews.length} activeSlide={activeSlide} />
      </>
    );
  };

  const renderSectionItem = ({item}) => {
    return (
      <>
        <SectionCard item={item} />
        <Pagination length={reviews.length} activeSlide={activeSlide} />
      </>
    );
  };

  return (
    <View style={styles.reviewContainer}>
      <Title style={styles.reviewTitle}>{title}</Title>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={reviews}
        renderItem={type === 'review' ? renderItem : renderSectionItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
