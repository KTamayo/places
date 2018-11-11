import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

class PlaceInput extends Component {
  state = {
    placeName: '',
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    this.state.placeName = this.state.placeName.trim();
    if (this.state.placeName === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    this.state.placeName = '';
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place."
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          title="Add"
        />
      </View>
    );
  }
}

export default PlaceInput;
