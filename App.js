import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default class App extends Component {
  state = {
    places: [],
  }

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      if (Object.values(prevState.places).includes(placeName)) {
        alert(`${placeName} is already in use!`);
        return;
      }
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }

  placeDeletedHandler = (index) => {
    let newPlaces = [...this.state.places];
    newPlaces.splice(index, 1);
    this.setState({ places: newPlaces });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}
