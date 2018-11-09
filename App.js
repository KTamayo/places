import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  }  
});

type Props = {};
export default class App extends Component<Props> {
  
  state = {
    placeName: "",
    places: []
  }

  placeNameChangeHandler = (val) => {    
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }    
    this.setState( prevState => {      
      if(Object.values(prevState.places).includes(prevState.placeName)) {
        alert(`${prevState.placeName}is already in use!`);
        return;
      }
      this.setState({placeName: ''})      
      return {        
        places: prevState.places.concat(prevState.placeName)        
      };    
    });    
  }

  render() {
    const placesOutput  = this.state.places.map( (place,i)   => (
      <Text key={i} >{place}</Text>
    ));
    return (
      <View style={styles.container}>        
        <View style={styles.inputContainer}>          
          <TextInput   
            style={styles.placeInput}
            placeholder="An awesome place."            
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler} />
          <Button             
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title="Add" />
        </View>
        <View>{placesOutput}</View>        
      </View>
    );
  }
}