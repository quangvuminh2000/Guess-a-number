import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
};

// PropTypes Restriction
Card.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ])
  ),
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
