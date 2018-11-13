import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
} from './src/store/actions/index';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

class App extends Component {
  

  placeAddedHandler = (placeName) => {
    // this.setState((prevState) => {
    // if (Object.values(this.props.places).includes(placeName)) {
    //   alert(`${placeName} is already in use!`);
    //   return;
    // }
    this.props.onAddPlace(placeName);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
    // this.setState((prevState) => {
    //   return {
    //     places: prevState.places.filter((place) => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null,
    //   };
    // });
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
    // this.setState((prevState) => {
    //   return {
    //     selectedPlace: prevState.places.find( (place) => {
    //       return place.key === key;
    //     }),
    //   };
    // });    
  };


  modalClosedHandler = () => {    
    this.props.onDeselectPlace();
    // this.setState({
      // selectedPlace: null,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
