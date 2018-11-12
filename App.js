import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/tj_v_roque.jpg';

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
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          image: placeImage,
        }),
      };
    });
  }

  placeDeletedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      };
    });
  };

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
