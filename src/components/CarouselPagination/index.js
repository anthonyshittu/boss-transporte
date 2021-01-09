import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';

const CarouselPagination = ({length, activeSlide}) => {
  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export default CarouselPagination;

CarouselPagination.propTypes = {
  length: PropTypes.number.isRequired,
  activeSlide: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
