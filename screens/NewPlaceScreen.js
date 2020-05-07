import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const NewPlaceScreen = props => {
    return (
      <View>
        <Text>NewPlaceScreen</Text>
      </View>
    );
};

const styles = StyleSheet.create({});

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
};

export default NewPlaceScreen;