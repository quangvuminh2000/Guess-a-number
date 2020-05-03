import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Button } from 'react-native';
import Colors from '../constants/Colors';

const GameOverScreen = ({ numOfRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>The Game is Over!</Text>
        <Text style={styles.text}>Number Of Rounds: {numOfRounds}</Text>
        <Text style={styles.text}>Number Guessed: {userNumber}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title='Wanna Restart?'
          onPress={onRestart}
          color={Colors.purplePuppies}
        />
      </View>
    </View>
  );
};

// PropTypes Restriction
GameOverScreen.propTypes = {
  numOfRounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    borderStyle: 'solid',
  },
  textContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  }
});
// End Styles

export default GameOverScreen;
