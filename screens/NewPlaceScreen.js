import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import Colors from '../constants/Colors';

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');

  const titleChangedHandler = text => {
    // you could add validation
    setTitleValue(text);
  };

  const savePlaceHandler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={titleChangedHandler}
          value={titleValue}
        />
        <Button 
          title='Save Place' 
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginRight: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
};

export default NewPlaceScreen;