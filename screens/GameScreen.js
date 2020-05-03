import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors';

// Generate Number
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  // States
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
  const [rounds, setRounds] = useState(0);
  // End States

  // Refs
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  // End Refs

  // Effects
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);
  // End Effects

  // Handler Functions
  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert(
        `Don't f**king lie you b**ch!`,
        `This is Wrong for sure, Don't trick me I'm too smart XD`,
        [{ text: `Sorry!`, style: 'cancel' }]
      );
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };
  // End Handler Functions

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='LOWER'
            onPress={() => nextGuessHandler('lower')}
            color={Colors.purplePuppies}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='GREATER'
            onPress={() => nextGuessHandler('greater')}
            color={Colors.shadowDirt}
          />
        </View>
      </Card>
    </View>
  );
};

// PropTypes Restriction
GameScreen.propTypes = {
  userChoice: PropTypes.number.isRequired,
  onGameOver: PropTypes.func.isRequired,
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  button: {
    width: '40%',
    borderStyle: 'solid',
  }
});
// End Styles

export default GameScreen;
