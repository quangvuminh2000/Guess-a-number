import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

// PropTypes Restriction
NumberContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
      ])
    ),
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ])
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22
  }
});

export default NumberContainer;
