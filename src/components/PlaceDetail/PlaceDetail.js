import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const style = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
});

const placeDetail = (props) => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={style.placeImage} source={props.selectedPlace.image} />
        <Text style={style.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={style.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

export default placeDetail;
