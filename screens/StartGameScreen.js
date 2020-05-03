import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({ onStartGame }) => {

  // States
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  // End States

  // Handler Functions
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const touchScreenHandler = () => {
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Keyboard.dismiss();
      Alert.alert(
        'Invalid Number!',
        'Input has to be a number between 1 and 99',
        [{
          text: 'Okay Bae :3',
          style: 'destructive',
          onPress: resetInputHandler,
        }],
      );
      return;
    }
    else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();
    }
  };
  // End Handler Functions

  // Feedbacks

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='START GAME' onPress={() => onStartGame(selectedNumber)} />
      </Card>
    );
  }

  // End Feedbacks

  return (
    <TouchableWithoutFeedback onPress={touchScreenHandler}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit={true}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={resetInputHandler}
                color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

// PropTypes
StartGameScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '40%',
    borderStyle: 'solid',
  },
  input: {
    width: '40%',
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
// End Styles

export default StartGameScreen;
