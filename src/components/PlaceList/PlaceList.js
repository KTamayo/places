import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

const placeList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem          
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected (info.item.key)}
        />
      )}
    />
  );
};

export default placeList;
