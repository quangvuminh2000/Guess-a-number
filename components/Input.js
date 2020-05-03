import React from 'react';
import { TextInput, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { style } = props;
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

// PropTypes Restriction
Input.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.oneOf(['auto' /*default*/, 'left', 'right', 'center', 'justify']),
      ViewPropTypes.style,
    ])
  ),
};
// End PropTypes Restriction

// Styles
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  }
});
// End Styles

export default Input;
